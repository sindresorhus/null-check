import test from 'ava';
import m from './';

test(t => {
	t.throws(() => m('unicorn.png\u0000'), Error, 'Path must be a string without null bytes.');
	t.notThrows(() => m('unicorn.png'));
});
