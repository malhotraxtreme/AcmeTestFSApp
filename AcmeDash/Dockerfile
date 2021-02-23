FROM node:13.12.0-alpine

RUN mkdir -p /usr/src/acmedash
WORKDIR /usr/src/acmedash

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

COPY . .

EXPOSE 4100

CMD ["npm", "start"]