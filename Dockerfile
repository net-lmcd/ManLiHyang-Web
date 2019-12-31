FROM node:10-alpine

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

EXPOSE 5000

WORKDIR /home/app

RUN npm install -g serve

COPY build ./build

CMD ["sh", "-c", "serve -s build"]
