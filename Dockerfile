FROM node:14-alpine

WORKDIR /usr/src/app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

ARG REACT_APP_ENV
ARG REACT_APP_HOST_URL

ENV REACT_APP_ENV $REACT_APP_ENV
ENV REACT_APP_HOST_URL $REACT_APP_HOST_URL

RUN yarn install
RUN npm install -g serve

COPY . .

EXPOSE 3003

RUN yarn build

CMD serve -s build -l 3003