# null-check

> Ensure a path doesn't contain [null bytes](https://en.wikipedia.org/wiki/Null_character)

## Install

```
$ npm install null-check
```

## Usage

```js
import nullCheck from 'null-check';

try {
	nullCheck('unicorn.png\u0000');
} catch (error) {
	console.log(error);
	//=> 'Path must be a string without null bytes.'
}
```
