/*global describe, it */
'use strict';
var assert = require('assert');
var testNodeService = require('../');

describe('test-node-service node module', function () {
  it('must have at least one test', function () {
    testNodeService();
    assert(false, 'I was too lazy to write any tests. Shame on me.');
  });
});
