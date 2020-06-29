export const getAccessCode = () => {
	let characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = characters
		.split('')
		.map(_ =>
			characters.charAt(
				Math.floor(Math.random() * characters.length)
			)
		)
		.splice(0, 20)
		.join('');

	return result;
};
