# pull official base image
FROM node:14-alpine

# set working directory
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package*.json ./


RUN yarn install
RUN npm install -g serve

# add app
COPY . .

# start app
EXPOSE 3003

RUN yarn build

CMD serve -s build -l 3003