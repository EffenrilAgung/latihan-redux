import React from 'react';

const Button = (props) => {
	const { children, to, className, onClick } = props;
	return (
		<div>
			<button to={to} className={className} onClick={onClick}>
				{children}
			</button>
		</div>
	);
};

export default Button;
