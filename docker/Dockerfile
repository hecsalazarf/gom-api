FROM node:12.13.0-alpine

# Version argument
ARG VERSION=latest

# Labeling
LABEL maintainer="hecsalazarf" \
      description="GOM API" \
      version="${VERSION}"

# Copy entrypoint script
COPY --chown=node:node docker/docker-entrypoint.sh /usr/local/bin/

# Set the working directory
WORKDIR /home/node/gomapi

# Bundle APP files
COPY dist ./dist/
COPY package.json* ecosystem.config.js ./
COPY config ./config/
    
    # Make entrypoint executable
RUN chmod +x /usr/local/bin/docker-entrypoint.sh \
    # Install bash for entrypoint execution
    && apk update && apk add bash \
    # Install PM2 globally with log rotation module
    && npm install pm2@4.2.0 -g && pm2 install pm2-logrotate \
    # Configure PM2 log rotation module
    && pm2 set pm2-logrotate:max_size 1M \
    # Install app dependencies
    && npm install --production \
    # Change owner of working directory
    && chown -R node:node ../gomapi

# Set the user name
USER node

# Execute entrypoint
ENTRYPOINT ["docker-entrypoint.sh"]

# Expose the listening port
EXPOSE 3000

# Default command
CMD [ "pm2-runtime", "start", "ecosystem.config.js", "--env", "production" ]
