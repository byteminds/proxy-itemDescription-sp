FROM node:latest

# Create app directory
WORKDIR /src/app

# Install app dependencies
# Wildcard is used to ensure both package.json && package-lock.json are copied
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "npm", "start"]