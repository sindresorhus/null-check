export default function nullCheck(path) {
	if (!path.includes('\u0000')) {
		return;
	}

	const error = new Error('Path must be a string without null bytes.');
	error.code = 'ENOENT';
	throw error;
}
