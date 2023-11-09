import React from 'react';

const Input = (props) => {
	const { type, className, placeholder } = props;
	return (
		<div>
			<input type={type} className={className} placeholder={placeholder} />
		</div>
	);
};

export default Input;
