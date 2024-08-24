FROM node:latest

COPY . /home/app


WORKDIR /home/app

EXPOSE 9000

RUN npm install

CMD ["node","index.js"]