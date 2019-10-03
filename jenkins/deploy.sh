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
# NOTE: Docker cannot update the stack from local images because local
# images are never taken into consideration when deciding whether or not
# to update tasks. The workaround is to remove the previous deployment.
# However, this takes some time and a 'sleep' has to run to wait the proper
# stack removal before deploying the new one.
# Not the desired behaviour. TODO: Find a better solution.
ssh $SSH_OPTIONS -l $SSH_USR $REMOTE_HOST "cd ${REMOTE_TEMP_DIR} \
&& docker image load -i gom-api-image.tar \
&& export VERSION=$VERSION \
&& source env.sh \
&& docker stack rm gom \
&& sleep 5 \
&& docker stack deploy -c docker-compose-production.yml gom"
