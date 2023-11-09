import React from 'react';
import Homepage from './pages/Homepage';
import Singin from './pages/Singin';
import Signup from './pages/Signup';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/templates/Navbar';

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/signin" element={<Singin />} />
			</Routes>
		</React.Fragment>
	);
}

export default App;
