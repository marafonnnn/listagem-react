FROM node:alpine

WORKDIR /

COPY . .

EXPOSE 8080

RUN npm run build

RUN npm install -g serve

CMD ["serve", "-s", "build", "-l", "8080"]
