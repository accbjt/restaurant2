/*!
 * lll
 * Copyright(c) 2014 Madhusudhan Srinivasa <me@madhums.me>
 * MIT Licensed
 */

/**
 * A simple implementation of async.parallel
 *
 * @param {Array} list
 * @param {Function} callback
 * @api public
 */

module.exports = function (list, callback) {
  var len = list.length;
  var result = [];

  if (!callback) callback = function () {};

  list.forEach(function (fn, i) {
    var cb = function (err, value) {
      if (err) {
        list.length = 0;
        len = 0;
        return callback(err);
      } else {
        len = len - 1;
        result[i] = value;
      }
      if (!len && !err) return callback(null, result);
    };
    var _cb = (function (len, result, i) {
      return cb;
    })(len, result, i);
    fn(_cb);
  });
}
