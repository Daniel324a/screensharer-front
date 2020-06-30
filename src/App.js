//React Imports
import React from 'react';
import {
	BrowserRouter,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
//Proyect Imports
import { Share } from './views/Share/Share';
import { Login } from './views/Login/Login';
import { SignIn } from './views/SignIn/SignIn';
import { Options } from './views/Options/Options';
import { Navbar } from './components/Navbar/Navbar';
import Connect from './views/Connect/connect.js';
import Stream from './views/Connect/stream.js';

//Component
const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<div className='App'>
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
				<Redirect from='' to='/options' />
			</div>
		</BrowserRouter>
	);
};

export default App;
