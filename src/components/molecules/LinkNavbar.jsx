import React from 'react';
import NavLink from '../atoms/NavLink';
const LinkNavbar = () => {
	return (
		<React.Fragment>
			<NavLink
				to="/"
				className="text-base font-light hover:bg-blue-700 px-5 py-1 hover:rounded-sm hover:text-white"
			>
				Home
			</NavLink>
			<NavLink
				to="/profile"
				className="text-base font-light hover:bg-blue-700 px-5 py-1 hover:rounded-sm hover:text-white"
			>
				Profile
			</NavLink>
			<NavLink
				to="/signup"
				className="text-base font-light hover:bg-blue-700 px-5 py-1 hover:rounded-sm hover:text-white"
			>
				Sign up
			</NavLink>
			<NavLink
				to="/signin"
				className="text-base font-light hover:bg-blue-700 px-5 py-1 hover:rounded-sm hover:text-white"
			>
				Sign in
			</NavLink>
		</React.Fragment>
	);
};

export default LinkNavbar;
