'use strict';
module.exports = function (pth) {
	if (String(pth).indexOf('\u0000') !== -1) {
		var err = new Error('Path must be a string without null bytes.');
		err.code = 'ENOENT';

		throw err;
	}
};
