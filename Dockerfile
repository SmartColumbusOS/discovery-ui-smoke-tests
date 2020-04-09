  FROM cypress/base:8
  COPY . /app/src
  WORKDIR /app/src
  RUN npm install
  CMD [ "npm", "run", "cypress:run" ]