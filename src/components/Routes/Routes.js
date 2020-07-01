//React Imports
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

//Proyect Imports
import { Connect } from '../../views/Connect/Connect.js';
import { Stream } from '../../views/Stream/Stream.js';
import { Share } from '../../views/Share/Share';
import { Login } from '../../views/Login/Login';
import { SignIn } from '../../views/SignIn/SignIn';
import { Options } from '../../views/Options/Options';

//Component
export const Routes = () => {
	return (
		<>
			<Switch>
				<Route path='/login' component={Login} />
				<Route path='/signin' component={SignIn} />
				<Route
					path='/connect'
					exact
					render={() => <Connect />}
				/>
				<Route
					path='/connect/stream'
					exact
					render={props => <Stream {...props} />}
				/>
				<Route
					path='/screen'
					render={props => <Share {...props} />}
				/>
				<Route
					path='/options'
					render={props => <Options {...props} />}
				/>
			</Switch>
			<Redirect from='' to='/login' />
		</>
	);
};
