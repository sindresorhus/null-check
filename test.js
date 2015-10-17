import test from 'ava';
import fn from './';

test(t => {
	t.true(fn('unicorn.png\u0000'));
	t.false(fn('unicorn.png'));
	t.end();
});
