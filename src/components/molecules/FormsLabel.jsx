import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

const FormsLabel = (props) => {
	const { children, type, placeholder } = props;
	console.log(children);
	return (
		<div>
			<Label>{children}</Label>
			<Input
				type={type}
				placeholder={placeholder}
				className="w-72 h-9 px-2 border rounded focus:outline-none focus:ring-0"
			/>
		</div>
	);
};

export default FormsLabel;
