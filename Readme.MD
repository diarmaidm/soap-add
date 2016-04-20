# Add two number using a soap call
## This application adds two numbers using an external soap service

fork and clone application locally eg.

```git clone https://address.copied.from.github/```

### Install local dependancies

`npm install` to install npm packages

`bower install` to install client side dependancies eg. bootstrap

### Run the tests
`npm test`

### Run the application locally
Start the server with `npm start` and browse http://localhost:3000 in chrome

### Pivotal Cloud Foundry
This application is published to http://soap-add.cfapps.io/ using `cf push` which reads manifest.

Download and install the Cloud Foundry CLI https://console.run.pivotal.io/tools

Follow the instructions under **GETTING STARTED**

To get info from terminal use `cf logs soap-add --recent`

## Working Notes:
I installed jshint as a dev dependancy
```npm install jshint --save-dev```

I added

```"pretest": "jshint routes test",```
to package.json to do basic linting when tests are ran

