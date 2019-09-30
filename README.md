# Node Boilerplate v1.0

> **Starter code for node/express based API**

The **Node Boilerplate** exposes a well documented [JSON:API Spec](http://jsonapi.org/) Compliant `REST API` that can be used by external services to access & manipulate the data.

**API Documentation:**
-  A postman collection of the API requests is available at https://www.getpostman.com/collections/c0bf860e4d4442dcb504

## Technology Stack

Please get familiar with the components of the project in order to be able to use this boilerplate.

### Components

* Database - [MongoDB](https://www.mongodb.com/)
* Runtime - [Nodejs](https://nodejs.org/en/)
* App server - [express](https://expressjs.com/)

### Installation
to install node boilerplate on your local system follow these steps -
clone this repo: use `git clone https://github.com/tech-lcx/nodeBoilerPlate.git`
change directory: `cd nodeBoilerPlate`
install npm modules: `npm install`

### Running the API
* use command `npm start` to start the api
* using API testing tools like postman hit the endpoint `localhost:3000/`
* Route for updating user is authenticated. The `jwt` token obtained after login needs to sent in the authorisation header.

### External Service Dependencies

#### <Dependency-name>
<dependency-info (if any)>

### Testing

Add unit tests for a new features/functionality and put it in `test/` folder.

Test are written using [Mocha](https://mochajs.org/) and [Chai](http://www.chaijs.com/).

#### Running test cases
use the command `npm test` to run test cases. **(Please make sure all test cases pass before pushing your code)**

## Error Handling
All the errors handling inside a middleware should be performed by setting the `status` code and the `msgToCLient` property of the `error` object and passing it to the next middleware.

## Logging

Node Boilerplate uses [winston](https://github.com/winstonjs/winston#readme) for error and warning logs.

## Internationalization (i18n)
<Internationalization  info>

## Branch Policy

We have the following branches :
 * **development**
    All development goes in this branch, please make sure that all the unit test pass locally before pushing your code to this branch.
 * **master**
   This contains shipped code. After significant features/bug-fixes are accumulated on development, we make a version update, and make a release.

## Release Policy
<release-policy info>

## Contributions Best Practices

**Commits**
* Write clear meaningful git commit messages (Do read http://chris.beams.io/posts/git-commit/)
