import { AuthService } from '../../services/auth.service';

export const AuthState = {
	isAuthenticated: false,
	username: null,
};

export const AuthReducer = (state = AuthState, action) => {
	console.log('state', state);
	console.log('action', action);

	switch (action.type) {
		case 'CheckAuthState':
			return {
				...state,
				username: AuthService.Name(), // git LocalStorage yada sessionStorage'dan ilgili bilgileri oku
				isAuthenticated: AuthService.isAuthenticated(),
			};
		case 'ClearAuthState':
			return {
				...state,
				username: AuthState.username, // git LocalStorage yada sessionStorage'dan ilgili bilgileri oku
				isAuthenticated: AuthState.isAuthenticated,
			};
		default:
			return state;
	}
};
