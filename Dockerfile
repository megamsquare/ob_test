FROM node:19-alpine

# Installing curl for debugging
RUN apk add curl

ARG NODE_ENV=profuction
ENV NODE_ENV $NODE_ENV

ARG PORT=3000
ENV PORT $PORT
EXPOSE ${PORT}

RUN npm i npm@latest -g

RUN mkdir app && chown node:node app
WORKDIR /app

USER node
COPY --chown=node:node package.json package-lock.json ./
RUN npm install --no-optional && npm cache clean --force
ENV PATH app/node_modules/.bin:$PATH

FROM base as dev
ENV NODE_ENV=development
RUN NOPM INSTALL --only=development
CMD ["npm", "start"]
