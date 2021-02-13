FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY ./xmeme_backend/package.json ./

RUN npm install

COPY ./xmeme_backend/ .

EXPOSE 8081

CMD [ "npm", "run", "start" ]