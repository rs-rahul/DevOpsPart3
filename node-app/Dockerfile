FROM node:16-alpine

WORKDIR /usr/src/api

COPY package*.json ./

RUN npm install

COPY . .

ENV MONGO_URL="" PORT=5000

EXPOSE 5000

CMD [ "nodemon", "server.js" ]
