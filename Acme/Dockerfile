FROM node:13.12.0-alpine

RUN mkdir -p /usr/src/acmeapi
WORKDIR /usr/src/acmeapi


COPY package.json .
COPY package-lock.json .
RUN npm install --silent --production=false

COPY . .

ENV MONGODB_USERNAME=root
ENV MONGODB_PASSWORD=pass

EXPOSE 3000

CMD ["/usr/src/acmeapi/node_modules/.bin/nodemon", "index.ts"]