import React from 'react';
import { Link } from 'react-router-dom';

const Brand = (props) => {
	const { children, to, className } = props;
	return (
		<React.Fragment>
			<Link to="/" className={className}>
				Shop
			</Link>
		</React.Fragment>
	);
};

export default Brand;
