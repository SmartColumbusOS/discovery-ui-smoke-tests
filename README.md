# discovery-ui-smoke-tests

Tests Discovery's application in production

## How to Use

### Install Dependencies

`npm install`

### Swith environments

Update baseUrl in cypress.json

### Run tests locally (headlessly)

`npm run cypress:run`

### Run tests locally (interactively)

`npm run cypress:open`

### Build image

`docker image build -t discoveryuismoketests:1.0 .`

### Run tests

`docker container run --name discoveryST --ipc=host discoveryuismoketests:1.0`

### To replace the snapshots

exec into the container

`docker container run --rm --name discoveryST --ipc=host -it discoveryuismoketests:1.0 bash`

inside the container run

`npm run cypress:run:update`

this will replace the old snapshots with the new snapshots 
then on your host machine in a separate terminal run:

`docker cp discoveryST:"/app/src/cypress/snapshots/cota_ui" cypress/snapshots/`