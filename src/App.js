//React Imports
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
//Proyect Imports
import { Routes } from './components/Routes/Routes';
import { Navbar } from './components/Navbar/Navbar';

//Component
const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<div className='App'>
				<Routes />
			</div>
		</BrowserRouter>
	);
};

export default App;
