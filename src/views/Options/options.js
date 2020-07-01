//React Imports
import React from 'react';
//Proyect Imports
import {OptionCard} from '../../components/OptionCard/OptionCard';
import { getAccessCode } from '../../helpers/getAccessCode';
//Styles
import './Options.css';

export const Options = () => {
	return (
		<center>
			<div className='cardContainer'>
				<OptionCard
					title='Share your screen'
					description='You can share your screen with an access code.'
					src='../img/screen.svg'
					route={{
						pathname: '/screen',
						state: { access_code: getAccessCode() },
					}}
				/>
				<OptionCard
					title='Connect to a screen'
					description='You can connect to another screen with an access code.'
					src='../img/share.svg'
					route='/connect'
				/>
			</div>
		</center>
	);
};
