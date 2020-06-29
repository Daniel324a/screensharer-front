//React Imports
import React from 'react';
//Proyect Imports
import { LogInForm } from '../../components/LoginForm/login_form';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

//Component
const Login = () => {
	return (
		<center>
			<LogInForm />
			<Link
				to='/connect'
				style={{ textDecoration: 'none' }}
			>
				<Button variant='outlined' color='primary'>
					Do you have a link? use it here!
				</Button>
			</Link>
		</center>
	);
};

export { Login };
