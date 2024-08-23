FROM node:lts-alpine
ENV NODE_ENV=development
WORKDIR /usr/src/app
COPY ["package*.json", "./"]
RUN npm install --development && mv node_modules ../
COPY . .
EXPOSE 6220
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "run", "dev"]
