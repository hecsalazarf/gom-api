FROM node:10.16.3-alpine

# Labeling
LABEL maintainer="hecsalazarf" \
      description="GOM API" \
      version="0.1.0"

# Install PM2 globally
RUN npm install pm2 -g

# Set the user name or UID
USER node

RUN mkdir /home/node/gomapi

# Set the working directory
WORKDIR /home/node/gomapi

# Bundle APP files
COPY --chown=node:node dist ./dist/
COPY --chown=node:node package.json* ecosystem.config.js ./
COPY --chown=node:node config ./config/

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production

# Expose the listening port
EXPOSE 3000

# Default command
CMD [ "pm2-runtime", "start", "ecosystem.config.js", "--env", "production" ] 
