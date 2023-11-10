import React from 'react';
import FormProfile from '../components/templates/FormProfile';

const Profile = () => {
	return (
		<React.Fragment>
			<div className="grid grid-flow-row grid-cols-12">
				<div className="col-span-6 border flex justify-center flex-col items-center">
					<h2 className="text-3xl font-semibold">Profile</h2>
					<FormProfile />
				</div>
				<div className="col-span-6 border backdrop-opacity-10 backdrop-invert bg-black/30 bg-profile-bg h-screen bg-cover bg-center"></div>
			</div>
		</React.Fragment>
	);
};

export default Profile;
