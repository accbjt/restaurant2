## lll (parallel)

A simple implementation of `async.parallel`

## Install

```sh
$ npm install lll
```

### Usage

```js
var parallel = require('lll');
parallel([
  function (cb) {
    setTimeout(function () {
      cb(null, 'one');
    });
  },
  function (cb) {
    setTimeout(function () {
      cb(null, 'two');
    });
  }
], function (err, result) {
  console.log(result)
  // => ['one', 'two']
})
```

## Test

```sh
$ npm test
```

## License

MIT
