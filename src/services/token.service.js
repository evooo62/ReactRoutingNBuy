import jwt_decode from 'jwt-decode';

export const TokenService = {};

TokenService.setToken = (accessToken, persistance) => {
	console.log('persistance', persistance);

	if (persistance) localStorage.setItem('access_token', accessToken);
	else sessionStorage.setItem('access_token', accessToken); // tarayıcıyı kapatınca oturum düşer.
};

TokenService.parseToken = (accessToken) => {
	var decoded = jwt_decode(accessToken);
	return decoded;
};

TokenService.clearToken = () => {
	localStorage.removeItem('access_token');
	sessionStorage.removeItem('access_token');
};

TokenService.getUserName = () => {
	const token =
		localStorage.getItem('access_token') ||
		sessionStorage.getItem('access_token');

	if (token == undefined) {
		return null;
	} else {
		const data = TokenService.parseToken(token);
		return data['username'];
	}
};
