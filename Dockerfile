FROM cypress/base:8

WORKDIR /app/src
COPY package.json ./
RUN npm install

COPY . ./
CMD [ "npm", "run", "cypress:run" ]