import React from 'react';

const Label = (props) => {
	const { children, className } = props;
	return (
		<div>
			<label className={className}>{children}</label>
		</div>
	);
};

export default Label;
