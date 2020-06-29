//React Imports
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import { Redirect } from 'react-router-dom';
//Proyect Imports
import { fetchSignIn } from '../../helpers/fetchSignIn';
//Styles
import './SignInForm.scss';
import { useForm } from '../../hooks/useForm';

//Component
export const SignInForm = () => {
	//Hooks
	const [form, handleInputChange] = useForm({
		user: '',
		email: '',
		password: '',
	});
	const [redirect, setRedirect] = useState({});

	//Methods
	const { user, email, password } = form;

	const signInHandler = () => {
		fetchSignIn(form, () =>
			setRedirect({ route: '/screen' })
		);
	};

	if (redirect.route)
		return <Redirect from='' to={redirect} />;
	return (
		<center>
			<Card className='form'>
				<br />
				<form>
					<TextField
						className='mt-5'
						fullWidth
						label='User'
						name='user'
						onChange={handleInputChange}
						type='text'
						value={user}
					/>
					<TextField
						className='mt-5'
						fullWidth
						label='Email'
						name='email'
						onChange={handleInputChange}
						type='email'
						value={email}
					/>

					<TextField
						className='mt-5'
						fullWidth
						label='Password'
						name='password'
						onChange={handleInputChange}
						type='password'
						value={password}
					/>

					<Button
						className='mt-20 mb-10'
						color='primary'
						onClick={signInHandler}
						variant='contained'
					>
						Sign In
					</Button>
				</form>
				<br />
			</Card>
		</center>
	);
};
