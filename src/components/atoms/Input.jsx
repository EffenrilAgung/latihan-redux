import React from 'react';

const Input = (props) => {
	const { type, className, placeholder, value, onChange, name } = props;
	return (
		<div>
			<input
				type={type}
				className={className}
				placeholder={placeholder}
				value={value}
				name={name}
				onChange={onChange}
			/>
		</div>
	);
};

export default Input;
