import test from 'ava';
import nullCheck from './index.js';

test('main', t => {
	t.throws(() => {
		nullCheck('unicorn.png\u0000');
	}, {
		message: 'Path must be a string without null bytes.'
	});

	t.notThrows(() => {
		nullCheck('unicorn.png');
	});
});
