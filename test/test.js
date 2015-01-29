/*global describe, it */
'use strict';
var assert = require('assert');
var testNodeService = require('../');

describe('test-node-service node module', function () {
  it('must have at least one test', function () {
    testNodeService();
    assert(true, 'Wrote a test.');
  });
});
