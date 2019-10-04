# Dockerfile to build the Jenkins agent in order to run the pipeline
FROM node:10.16.3-alpine
# Only the Docker CLI is needed, as the daemon runs on the host
COPY --from=docker:19.03.2 /usr/local/bin/docker /usr/local/bin/
RUN apk update \
    && apk add rsync openssh-client bash
