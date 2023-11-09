import React from 'react';
import FormSignup from '../components/templates/FormSignup';
import bg from '../assets/Images/bg.jpg';

const Signup = () => {
	return (
		<React.Fragment>
			<div className="flex flex-col justify-center items-center h-screen bg-[../assets/Images/bg.jpg]">
				<div className="border flex flex-col items-center py-5 rounded ">
					<h2 className="font-agbalumo text-4xl mb-5">Login</h2>
					<p className="text-sm text-slate-500 font-medium">
						Mulai terhubung dengan akun anda
					</p>
					<FormSignup />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Signup;
