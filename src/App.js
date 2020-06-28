//React Imports
import React from 'react';
import {
	BrowserRouter,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
//Proyect Imports
import Share from './views/ShareScreen/share';
import { Login } from './views/Login/Login';
import SignInForm from './components/SignInForm/signin_form';
import Options from './views/Options/options';
import NavBar from './components/Navbar/navbar';
import Connect from './views/Connect/connect.js';
import Stream from './views/Connect/stream.js';

//Component
const App = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<div className='App'>
				<Switch>
					<Route path='/login' component={Login} />
					<Route path='/signin' component={SignInForm} />
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
			</div>
		</BrowserRouter>
	);
};

export default App;
