import React from 'react';
import Homepage from './pages/Homepage';
import Singin from './pages/Singin';
import Signup from './pages/Signup';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/templates/Navbar';
import Profile from './pages/Profile';
import ProfileAdmin from './pages/admin/ProfileAdmin';

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/signin" element={<Singin />} />
				<Route path="/profile" element={<Profile />} />
				{/* <Route path="/profile:id" element={<Profile />} /> */}
				<Route path="/admin" element={<ProfileAdmin />} />
			</Routes>
		</React.Fragment>
	);
}

export default App;
