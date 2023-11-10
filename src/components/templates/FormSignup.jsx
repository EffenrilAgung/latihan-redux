import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormsLabel from '../molecules/FormsLabel';
import Button from '../atoms/button';

import { createUser } from '../../feature/userDetailsSlice';

const FormSignup = () => {
	const [users, setUsers] = useState({});

	const navigate = useNavigate();

	const dispatch = useDispatch();
	const getUserData = (e) => {
		setUsers({ ...users, [e.target.name]: e.target.value });
		console.log(users);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Users...', users);
		dispatch(createUser(users));
		navigate('/profile');
	};

	return (
		<React.Fragment>
			<form
				className="flex flex-col gap-5  w-96 py-5 items-center"
				onSubmit={handleSubmit}
			>
				<div className="flex flex-col gap-5">
					<FormsLabel
						type="email"
						placeholder="Enter Email"
						name="email"
						onChange={getUserData}
					>
						Email
					</FormsLabel>
					<FormsLabel
						type="text"
						placeholder="Enter Name"
						name="name"
						onChange={getUserData}
					>
						Name
					</FormsLabel>
					<FormsLabel
						type="password"
						placeholder="Enter Password"
						name="password"
						onChange={getUserData}
					>
						Password
					</FormsLabel>
				</div>
				<Button className="bg-blue-600 px-5 py-2 rounded text-white font-semibold">
					Sign Up Now
				</Button>
			</form>
		</React.Fragment>
	);
};

export default FormSignup;
