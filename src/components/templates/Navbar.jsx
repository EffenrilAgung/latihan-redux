import React from 'react';
import LinkNavbar from '../molecules/linkNavbar';
import Brand from '../atoms/Brand';

const Navbar = () => {
	return (
		<React.Fragment>
			<nav className="flex flex-row justify-between px-5 border-b h-16 items-center">
				<Brand className="text-xl font-medium" />
				<div className="flex ">
					<LinkNavbar />
				</div>
			</nav>
		</React.Fragment>
	);
};

export default Navbar;
