import React, { useRef } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { AuthService } from '../services/auth.service';
import { CheckAuthState } from '../store/action/auth.action';

function Login() {
	const formRef = useRef();
	const navigate = useNavigate(); // js tarafında yönlendirme işlemi yapar.

	// store güncellemek için ise React Reduxtan gelen useDispatch function kullanıyoruz.
	const dispatch = useDispatch();

	const formSubmit = (event) => {
		event.preventDefault();

		const formData = new FormData(formRef.current);

		// formData.get('rememberme').valueOf();

		const param = {
			username: formData.get('username'),
			password: formData.get('password'),
			rememberme: formData.get('rememberme') == 'on' ? true : false,
		};

		console.log('param', param);
		AuthService.login(param, (response, error) => {
			if (error) {
				alert(error);
			} else {
				// login olunca authstate güncellememiz lazım.
				dispatch(CheckAuthState());
				// dispatch ile AuthState action tetikledik.
				navigate(response);
			}
		});
	};

	return (
		<Container>
			<Form ref={formRef} method="get" onSubmit={formSubmit}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Username</Form.Label>
					<Form.Control
						name="username"
						type="text"
						placeholder="Enter Username"
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						name="password"
						type="password"
						placeholder="Password"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check name="rememberme" type="checkbox" label="Remember Me" />
				</Form.Group>
				<Button variant="primary" type="submit">
					Login
				</Button>
			</Form>
		</Container>
	);
}

export default Login;
