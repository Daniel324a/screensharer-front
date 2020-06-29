//React Imports
import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
//Styles
import './OptionCard.css';

//Component
export const OptionCard = ({
	src,
	title,
	description,
	route,
}) => {
	return (
		<div className='card' id='cardOption'>
			<Card elevation={3}>
				<Card elevation={3} className='icon-card'>
					<Avatar
						variant='square'
						src={src}
						className='icon'
					/>
				</Card>
				<h2>{title}</h2>
				<p>{description}</p>
				<div className='buttonContainer'>
					<Link
						to={route}
						style={{ textDecoration: 'none' }}
						className='goButton'
					>
						<Button variant='contained' color='primary'>
							Go
						</Button>
					</Link>
				</div>
			</Card>
		</div>
	);
};
