//React Imports
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

//Proyect Imports
import { useForm } from '../../hooks/useForm';

//Styles
import './Connect.css';

//Component
export const Connect = () => {
	//Hooks
	const [form, handleInputChange] = useForm({
		access_code: '',
	});
	const { access_code } = form;

	return (
		<div id='connect' className='container'>
			<Card className='card' elevation={3}>
				<CardMedia
					className='poster'
					component='img'
					alt='Devices'
					height='300'
					image={'/img/devices.svg'}
					title='Devices'
				/>
				<CardContent>
					<h3>Type your access code </h3>
					<form noValidate autoComplete='off'>
						<TextField
							className='input-code'
							label='your code'
							name='access_code'
							onChange={handleInputChange}
							value={access_code}
						/>
					</form>
					<p className='decription'>
						For watch a device you need to type the access code of
						device that it's streaming.
					</p>
				</CardContent>
				<CardActions className='buttons'>
					<Link
						to={{
							pathname: '/connect/stream',
							state: { access_code },
						}}
						style={{ textDecoration: 'none' }}
					>
						<Button size='large' color='primary'>
							Join
						</Button>
					</Link>
				</CardActions>
			</Card>
		</div>
	);
};
