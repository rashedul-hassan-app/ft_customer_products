# FT Customer Products technical exercise

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
This package is designed in accordance to the above guidelines.

# Features
The package exports a function called requestMultipleUrls(urls) and accepts an array of URLS.

The function returns the data within the specified URLs in an array of Promises.

# Choice of Dependencies
No external dependency is required to run this package. However, 'http' and 'https' native package of Node.js has been used.

There is an NPM package called 'request-promise', which could have been used to do the aforementioned task, but then there would be no fun in it. Hence, it was not chosen.

# Error States
The package handles error states using the Promise's reject() feature. Any Status Code within the range of 200-300 is accepted/resolved. All status codes outside these code range are rejected and thrown as errors.

# Testing
Unit tests written to check for basic null checks.
