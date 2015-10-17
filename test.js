import test from 'ava';
import fn from './';

test(t => {
	t.throws(() => fn('unicorn.png\u0000'), Error, 'Path must be a string without null bytes.');
	t.doesNotThrow(() => fn('unicorn.png'));
	t.end();
});
