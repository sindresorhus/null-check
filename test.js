import test from 'ava';
import fn from './';

test('null bytes', t => {
	t.throws(fn.bind(null, 'unicorn.png\u0000'), Error, 'Path must be a string without null bytes.');
	t.end();
});

test('no null bytes', t => {
	t.doesNotThrow(fn.bind(null, 'unicorn.png'));
	t.end();
});
