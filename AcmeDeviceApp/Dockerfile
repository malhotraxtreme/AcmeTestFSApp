FROM node:13.12.0-alpine

RUN mkdir -p /usr/src/acmedevice
WORKDIR /usr/src/acmedevice

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

COPY . .

EXPOSE 4200

CMD ["npm", "start"]