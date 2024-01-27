FROM node:14.17.1-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000:4000

CMD [ "npm", "start" ]