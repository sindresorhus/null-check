'use strict';
var test = require('ava');
var nullCheck = require('./');

test('async', function (t) {
	t.plan(2);

	nullCheck('unicorn.png\u0000', function (err) {
		t.assert(err, err);
		console.log(err)
		t.assert(err.code === 'ENOENT');
	});
});

test('sync', function (t) {
	t.assert(nullCheck('unicorn.png'));
	t.end();
});
