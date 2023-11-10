import React from 'react';
import FormSignIn from '../components/templates/FormSignin';

const SignIn = () => {
	return (
		<React.Fragment>
			<div className="flex flex-col justify-center items-center h-screen bg-login-bg bg-cover bg-center">
				<div className="border flex flex-col items-center py-5 rounded backdrop-blur-sm bg-white/30">
					<h2 className="font-agbalumo text-4xl mb-5">SignIn</h2>
					<p className="text-sm text-white font-medium">
						Selamat Datang Kembali
					</p>
					<FormSignIn />
				</div>
			</div>
		</React.Fragment>
	);
};

export default SignIn;
