# null-check [![Build Status](https://travis-ci.org/sindresorhus/null-check.svg?branch=master)](https://travis-ci.org/sindresorhus/null-check)

> Ensure a path doesn't contain [null bytes](http://en.wikipedia.org/wiki/Null_character)


## Install

```
$ npm install --save null-check
```


## Usage

```js
const nullCheck = require('null-check');

try {
	nullCheck('unicorn.png\u0000');
} catch (err) {
	//=> 'Path must be a string without null bytes.'
}
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
