FROM node:alpine

WORKDIR /app

COPY package*.json .

RUN npm i -f 

COPY . .

EXPOSE 8000

CMD ["npm","start"]