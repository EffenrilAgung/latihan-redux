import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

const FormsLabel = (props) => {
	const {
		children,
		type,
		onChange,
		value,
		placeholder,
		name,
		className = 'w-72 h-9 px-2 border rounded focus:outline-none focus:ring-0',
	} = props;
	return (
		<div>
			<Label className="text-base font-medium">{children}</Label>
			<Input
				type={type}
				placeholder={placeholder}
				name={name}
				className={className}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

export default FormsLabel;
