import React from 'react';
import FormsLabel from '../molecules/FormsLabel';
import Button from '../atoms/button';

const FormSignIn = () => {
	return (
		<React.Fragment>
			<div className="flex flex-col gap-5  w-96 py-5 items-center">
				<div className="flex flex-col gap-5">
					<FormsLabel type="email" placeholder="Enter Email">
						Email
					</FormsLabel>
					<FormsLabel type="password" placeholder="Enter Password">
						Password
					</FormsLabel>
				</div>
				<Button className="bg-blue-600 px-5 py-2 rounded text-white font-semibold">
					Sign In Now
				</Button>
			</div>
		</React.Fragment>
	);
};

export default FormSignIn;
