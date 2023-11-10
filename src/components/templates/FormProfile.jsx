import React from 'react';
import Button from '../atoms/button';
import FormsLabel from '../molecules/FormsLabel';
const FormProfile = () => {
	return (
		<React.Fragment>
			<div className="flex flex-col gap-5  w-screen py-5 items-center">
				<div className="flex flex-col gap-5">
					<FormsLabel
						type="email"
						placeholder="Enter Email"
						className="w-96 bg-slate-50 py-2  border"
					>
						Email
					</FormsLabel>
					<FormsLabel
						type="text"
						placeholder="Enter Name"
						className="w-96 bg-slate-50 py-2  border"
					>
						Name
					</FormsLabel>
					<FormsLabel
						type="password"
						placeholder="Enter Password"
						className="w-96 bg-slate-50 py-2  border"
					>
						Password
					</FormsLabel>
				</div>
				<Button className="bg-blue-600 px-5 py-2 rounded text-white font-semibold">
					Update Now
				</Button>
			</div>
		</React.Fragment>
	);
};

export default FormProfile;
