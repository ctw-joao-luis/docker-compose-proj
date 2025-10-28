FROM node:slim
WORKDIR /app/
COPY ./package.json ./package-lock.json server.js ./database.js /app/
RUN npm install
EXPOSE 3000
CMD [ "node", "server.js" ]