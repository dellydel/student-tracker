export const encodeEmail = (email) => {
	if (email === null) return [];
	const encodedEmail = encodeURIComponent(email);
	return encodedEmail;
};
