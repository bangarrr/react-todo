FROM node:12.20.0-alpine

ENV APP_ROOT /app

WORKDIR $APP_ROOT
ADD ./ $APP_ROOT

RUN yarn global add create-react-app
