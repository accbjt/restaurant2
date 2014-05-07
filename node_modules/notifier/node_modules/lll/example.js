var parallel = require('./index');

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
    console.log(result);
    // => ['one', 'two', 'three']
  });
