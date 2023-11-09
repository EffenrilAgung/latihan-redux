import React from 'react';

const Button = (props) => {
	const { children, to, className } = props;
	return (
		<div>
			<button to={to} className={className}>
				{children}
			</button>
		</div>
	);
};

export default Button;
