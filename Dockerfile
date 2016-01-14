FROM node:argon

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package.json /apps
RUN npm install

# Bundle app source
COPY . /app

EXPOSE 8080
CMD [ "npm", "start" ]
