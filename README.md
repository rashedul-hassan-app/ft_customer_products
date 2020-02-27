# Technical exercise

We expect that this exercise should take no more than 90 minutes. This is a guideline, not a fixed limit. Don’t feel rushed to complete the exercise, but work on it as and when you have time.

What we expect

Write a JavaScript package that is able to:

- fetch an array of URLs which contain JSON data

- return their contents in a promise

When writing this package, you should consider:

- Error states

- Testing

- Documentation

- Choice of dependencies


# Solution
This package is designed in accordance to the above guidelines. Package can be downloaded from NPM using `npm i interview_cp_hungrycoder`

# Features
The package exports a function called requestMultipleUrls(urls) and accepts an array of URLs.

The function returns the parsed data from the URLs in terms of Promises. An array of Promises has been used to hold all the items of the URLs[].

# Choice of Dependencies
No external dependency is required to run this package. However, 'http' and 'https' native package of Node.js has been used. 

There is an NPM package called 'request-promise', which could have been used to do the aforementioned task, but then there would be no fun in it. Hence, it was not chosen.

# Error States
The package handles error states using the Promise's reject() feature. Any Status Code within the range of 200-299 is accepted/resolved. All status codes outside these code range are rejected and thrown as errors.

# Testing
Testing framework of Jest has been chosen.

Other frameworks like Jasmine or Mocha could have been chosen. Mocha was not chosen due to the fact, there are other extra dependencies that may be needed e.g. Chai. Jasmine could have been chosen as it does not require other dependencies like Mocha, however Jest is seemingly much more newer than Jasmine and also does not require dependencies like Mocha. Furthermore, Jest is used by Facebook and is currently quite popular.
Unit tests written with Jest to check for basic null checks.

How to run the Unit Tests
*You would need the package Jest, to install Jest*

`npm i jest`

Navigate to the working directory and execute on terminal `npm test` to run the tests

## Test Dependencies ##
To mock the Http Status code calls, npm package Nock has been used as a dev test dependency.


