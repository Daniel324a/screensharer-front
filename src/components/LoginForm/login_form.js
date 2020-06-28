//React Imports
import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
//Proyect Imports
import { fetchLogin } from '../../helpers/fetchLogin';
//Styles
import './login_form.scss';

const LogInForm = () => {
	//Hooks
	const [form, setForm] = useState({
		email: '',
		password: '',
	});
	const [redirect, setRedirect] = useState({});

	//Methods
	const { email, password } = form;
	const loginHandler = () => {
		fetchLogin(
			'https://sshare-backend.herokuapp.com/login',
			form,
			() => {
				sessionStorage.setItem('email', email);
				setRedirect({ route: '/options' });
			}
		);
	};
	const handleInputChange = ({ target }) => {
		setForm({ ...form, [target.name]: target.value });
	};

	if (redirect.route)
		return <Redirect from='' to={redirect} />;
	return (
		<center>
			<Card className='form' elevation={3}>
				<br />
				<ScreenShareIcon className='icon' />

				<form>
					<TextField
						label='Email'
						value={email}
						onChange={handleInputChange}
						className='mt-10'
						type='email'
						name='email'
						fullWidth
					/>
					<TextField
						label='Password'
						value={password}
						onChange={handleInputChange}
						className='mt-10'
						type='password'
						name='password'
						fullWidth
					/>
					<Button
						variant='contained'
						onClick={loginHandler}
						className='mt-20 mb-10'
						color='primary'
					>
						Log In
					</Button>
					<br />
					you don't have an account yet? <br />
					<Link to='/signin'>Create one now!</Link>
				</form>
				<br />
			</Card>
		</center>
	);
};
export { LogInForm };
