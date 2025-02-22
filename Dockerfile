# Common build stage
FROM public.ecr.aws/docker/library/node:20.12.0-alpine3.19 as common-build-stage

LABEL author="Sri Kanya"

RUN node --version


COPY . ./app

WORKDIR /app

RUN npm install typescript -g
RUN npm install pm2@latest -g
RUN npm install --omit=dev
RUN npm run build

EXPOSE 3200
# Development build stage
FROM common-build-stage as development-build-stage

ENV NODE_ENV production

CMD ["pm2-runtime", "build/server.js"]
