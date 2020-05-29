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
COPY package*.json ./
COPY config ./config/
    
    # Make entrypoint executable
RUN chmod +x /usr/local/bin/docker-entrypoint.sh \
    # Install bash for entrypoint execution
    && apk update && apk add bash \
    # Install app dependencies
    && npm install --production \
    # Clean npm cache
    && npm cache clean --force \
    # Change owner of working directory
    && chown -R node:node ../gomapi

# Set the user name
USER node

# Execute entrypoint
ENTRYPOINT ["docker-entrypoint.sh"]

# Expose the listening port
EXPOSE 3000

# Default command
CMD [ "node", "dist/main.js" ]
