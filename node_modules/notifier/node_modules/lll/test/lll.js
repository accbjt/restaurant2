var parallel = require('../');
var assert = require('assert');

parallel([

    function (callback) {
      setTimeout(function () {
        callback(null, 'one');
      }, 200);
    },
    function (callback) {
      setTimeout(function () {
        callback(null, 'two');
      }, 100);
    },
    function (callback) {
      setTimeout(function () {
        callback(null, 'three');
      }, 300);
    },
  ],
  function (err, results) {
    assert.deepEqual(results, ['one', 'two', 'three']);
    assert.equal(null, err);
  });
