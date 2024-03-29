#!/bin/bash

# Script to deploy the app

set -eo pipefail
# -e  Exit immediately if a command exits with a non-zero status.
# -o option-name
# pipefail: the return value of a pipeline is the status of the last
# command to exit with a non-zero status, or zero if no command exited with a non-zero status

VERSION=$(awk -F'\"' '/\"version\": \".+\"/{ print $4; exit; }' package.json)
DOCKER_IMAGE="${DOCKER_TAG}:${VERSION}"

echo "---> Building Docker image"
docker build -t $DOCKER_IMAGE -f docker/Dockerfile --build-arg VERSION=$VERSION .
echo "---> Saving image to a tar archive"
docker image save -o gom-api-image.tar $DOCKER_IMAGE
echo "---> Sending tar archive"
rsync -avzhe "ssh ${SSH_OPTIONS}" gom-api-image.tar $SSH_USR@$REMOTE_HOST:$REMOTE_TEMP_DIR
echo "---> Sending compose file"
rsync -avzhe "ssh ${SSH_OPTIONS}" docker/docker-compose-production.yml $SSH_USR@$REMOTE_HOST:$REMOTE_TEMP_DIR
echo "---> Deploying stack"
# NOTE 1: Docker cannot update the stack from local images because local
# images are never taken into consideration when deciding whether or not
# to update tasks. The workaround is to remove the previous deployment.
# However, this takes some time and a 'sleep' has to run to wait the proper
# stack removal before deploying the new one.
# Not the desired behaviour. TODO: Find a better solution.

# NOTE 2: Prisma container does not support Docker secrets. Because of
# that, we need to export PRISMA_MANAGEMENT_API_SECRET and POSTGRES_PASSWORD
# environment variables
ssh $SSH_OPTIONS -l $SSH_USR $REMOTE_HOST "cd ${REMOTE_TEMP_DIR} \
&& docker image load -i gom-api-image.tar \
&& export VERSION=$VERSION \
&& export PRISMA_MANAGEMENT_API_SECRET=$PRISMA_MANAGEMENT_API_SECRET \
&& export POSTGRES_PASSWORD=$POSTGRES_PSW \
&& docker stack rm gom \
&& sleep 5 \
&& docker stack deploy --resolve-image=changed -c docker-compose-production.yml gom"

# Wait 15 seconds so that the stack is ready
echo "--> Waiting for tasks to boot up"
sleep 15
echo "--> Deploying Prisma into $PRISMA_SERVICE_ENDPOINT"
npx prisma deploy -f -p prisma/prisma-production.yml
echo "--> Cleaning up"
rm -v gom-api-image.tar
