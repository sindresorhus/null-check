import test from 'ava';
import fn from './';

test('null bytes', t => {
	try {
		fn('unicorn.png\u0000');
		t.fail('Error not thrown.');
	} catch (err) {
		t.ok(err);
		t.is(err.message, 'Path must be a string without null bytes.');
		t.is(err.code, 'ENOENT');
	} finally {
		t.end();
	}
});

test('no null bytes', t => {
	fn('unicorn.png');
	t.end();
});
