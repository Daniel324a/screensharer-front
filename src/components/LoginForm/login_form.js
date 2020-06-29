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
import { useForm } from '../../hooks/useForm';

const LogInForm = () => {
	//Hooks
	const [form, handleInputChange] = useForm({
		user: '',
		email: '',
		password: '',
	});
	const [redirect, setRedirect] = useState({});

	//Methods
	const { email, password } = form;
	const loginHandler = () => {
		fetchLogin(form, () => {
			sessionStorage.setItem('email', email);
			setRedirect({ route: '/options' });
		});
	};

	if (redirect.route)
		return <Redirect from='' to={redirect.route} />;
	return (
		<center>
			<Card className='form' elevation={3}>
				<br />
				<ScreenShareIcon className='icon' />
				<form>
					<TextField
						className='mt-10'
						fullWidth
						label='Email'
						name='email'
						onChange={handleInputChange}
						type='email'
						value={email}
					/>
					<TextField
						className='mt-10'
						fullWidth
						label='Password'
						name='password'
						onChange={handleInputChange}
						type='password'
						value={password}
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
			</Card>
		</center>
	);
};
export { LogInForm };
