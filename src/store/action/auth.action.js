// Name authenticated olan kullanıcının name bilgisini saklar
// isAuthenticated ise kimlik doğrulama işlemi yapılıp yapmadığı bilgisin,i saklar

// hangi username ile login olduğumuz bilgisini gönderdik.
export const CheckAuthState = () => {
	return {
		type: 'CheckAuthState', // reducer actiondan gönderilen type göre payload bilgisini alıp state günceller.
		payload: null,
	};
};

// logout olduğumuzda ise bunu çağıralım
export const ClearAuthState = () => {
	return {
		type: 'ClearAuthState', // reducer actiondan gönderilen type göre payload bilgisini alıp state günceller.
		payload: null,
	};
};
