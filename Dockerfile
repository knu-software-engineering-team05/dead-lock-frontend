FROM node:21-slim

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn

RUN yarn global add serve

COPY . .

EXPOSE 3000

RUN yarn build

CMD ["serve", "-s", "build"]