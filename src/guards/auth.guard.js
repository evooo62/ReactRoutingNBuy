import React from 'react';
import { Navigate } from 'react-router';
import { AuthService } from '../services/auth.service';

// children özel bir yapı
/*

aşağıdaki gibi bir componenti başka bir component ile sarmak istiyorsak dışl componentin propslarından children almamız lazım

<AuthGuard>
	Comment />
</AuthGuard>
AuthGuard C# daki authorize attribute aynısı
*/

function AuthGuard({ children }) {
	const isAuth = AuthService.isAuthenticated();

	if (!isAuth) return <Navigate to="/login" />;

	return children;
}

export default AuthGuard;
