//React Imports
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import PersonIcon from '@material-ui/icons/Person';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import { Link } from 'react-router-dom';
//Styles
import './Navbar.css';

//Component
export const Navbar = () => (
	<AppBar position='static'>
		<Toolbar className='toolbar'>
			<Button
				color='inherit'
				startIcon={<ScreenShareIcon />}
			>
				<h3>ScreenShare</h3>
			</Button>
			<div>
				<Link
					style={{ textDecoration: 'none' }}
					to='/login'
				>
					<Button
						className='link'
						startIcon={<PersonIcon />}
					>
						Log In
					</Button>
				</Link>
			</div>
		</Toolbar>
	</AppBar>
);
