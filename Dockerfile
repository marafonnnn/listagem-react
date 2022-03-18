FROM node:16-alpine

ENV PATH /app/node_modules/.bin:$PATH

WORKDIR /app

COPY ./ /app

COPY package.json /app/package.json

RUN npm install

CMD ["npm", "start"]

