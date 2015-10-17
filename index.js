'use strict';
module.exports = function (pth) {
	return String(pth).indexOf('\u0000') > -1;
};
