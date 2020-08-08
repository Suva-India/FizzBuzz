# FizzBuzz

FizzBuzz is an Express.js based REST API, that accepts a count between 1 and 100,
and returns a json array object containing FizzBuzz pattern upto input count.

It also prints each value on a new line on console.

## Project Summary

* Used Express.JS API Server as Node.JS Wrapper.
* Includes an error handling middleware and a GET API route
* Tests are written using Mocha, Chai and Chai-HTTTP (Includes only 4 integration tests)
* Error handling has been enabled with try-catch block in route and util function.
* VS Code has been used as code editor.
* Code linted with esLint and prettified with Prettier
* Deployed on Heroku cloud

## Prerequisites to create local development server

Before you begin, ensure you have the following installed:
* Node.js version 12.18.x or more
* Nodemon: For local server during development
    Nodemon can be globally installed by running the following command:
    npm install -g nodemon

## Installing FizzBuzz 

To install FizzBuzz, follow the below steps:

In your favourite terminal and OS, run the below commands:

1. git clone https://github.com/Suva-India/FizzBuzz.git
2. cd FizzBuzz
3. npm install -d
4. nodemon

## Using FizzBuzz API from web

To use FizzBuzz, access the below URL:

https://guarded-escarpment-99607.herokuapp.com/api/<<input number>>

Replace <<input number>> with a integer between 1 and 100.

Returns a JSON Object with property "fizzbuzzArray" and the requested array as property value.

## Contact

You can reach me at p.suvadip@gmail.com.

## License

This project uses the following license: MIT.




