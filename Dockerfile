FROM node:21-slim

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn

RUN yarn global add serve

COPY . .

RUN yarn build

CMD ["serve", "-s", "build"]