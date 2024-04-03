FROM icr.io/codeengine/node:20-alpine
WORKDIR /app
RUN npm init -f && npm install
COPY server.js .
COPY index.html .
EXPOSE 8080
CMD [ "node", "server.js" ]