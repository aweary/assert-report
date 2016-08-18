var assert = require('assert')
var successes = [];
var failures = [];
var hasFailure = false;
var nestedLevel = 0;

function header(text) {
  return `\n  \u001b[36m${text}\u001b[39m`
}

function passHeader(text) {
  return `\n  \u001b[4m\u001b[32m${text}\u001b[24m\u001b[39m\n`
}

function failHeader(text) {
  return `\n \u001b[4m\u001b[31m${text}\u001b[24m\u001b[39m\n`
}

function passMessage(text) {
  return `\x1B[32m  \u2714 \x1B[0m \u001b[32m${text}\u001b[39m`
}

function failMessage(text) {
  return `\x1B[31m  \u2718 \x1B[0m \u001b[31m${text}\u001b[39m`
}


function describe(scope, assertions) {
  var headerText = header(scope);
  console.log(headerText);
  assertions();
  print();
}

function it(message, assertion) {
  var errored = false;
  try {
    assertion(assert)
    successes.push(passMessage(message))
  } catch(err) {
    hasFailure = true
    failures.push(failMessage(message))
  }
}

function print() {
  var successLength = successes.length;
  var failureLength = failures.length;
  if (successLength) {
    var pluralized = `assertion${
      successLength > 1 ? 's' : ''
    }`
    var headerText = passHeader(
      `${successes.length} ${pluralized} passed\n`
    );
    console.log(headerText);
    successes.forEach(success => console.log(success));
  }
  if (failures.length) {
    var pluralized = `assertion${
      failureLength > 1 ? 's' : ''
    }`
    var header = failHeader(
      `${failures.length} ${pluralized} failed\n`
    );
    console.log(header);
    failures.forEach(failure => console.log(failure));
  }
  process.exit(hasFailure ? 1 : 0)
}


module.exports = {
  it,
  describe,
  print,
}
