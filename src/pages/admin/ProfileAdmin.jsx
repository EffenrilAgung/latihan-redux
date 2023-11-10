import React, { useEffect } from 'react';
import FormProfile from '../../components/templates/FormProfile';
import { getUser, deleteUser } from '../../feature/userDetailsSlice';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/atoms/button';

const ProfileAdmin = () => {
	const dispatch = useDispatch();

	const { users, loading } = useSelector((state) => state.app);

	useEffect(() => {
		dispatch(getUser());
	}, []);

	if (loading) {
		return (
			<div className="flex flex-col items-center justify-center h-screen">
				<h1 className="text-3xl font-semibold">Loading...</h1>
			</div>
		);
	} else {
		return (
			<React.Fragment>
				<div className="grid grid-flow-row grid-cols-12">
					<div className="col-span-6 border flex justify-center flex-col items-center">
						<h2 className="text-3xl font-semibold">Profile</h2>
						<FormProfile />
					</div>
					<div className="col-span-6 ">
						<div className="flex flex-col items-center px-4">
							<h2 className="text-3xl font-semibold">Daftar Users</h2>

							<table className="border-collapse border border-slate-500 w-full text-center">
								<thead>
									<tr className="border">
										<th className="border border-slate-600">ID</th>
										<th className="border border-slate-600">Name</th>
										<th className="border border-slate-600">Email</th>
										<th className="border border-slate-600">Role</th>
										<th className="border border-slate-600">Action</th>
									</tr>
								</thead>
								<tbody>
									{users &&
										users.map((user) => {
											return (
												<tr key={user.id}>
													<td className="border border-slate-700">{user.id}</td>
													<td className="border border-slate-700 text-sm">
														{user.name}
													</td>
													<td className="border border-slate-700 text-sm">
														{user.email}
													</td>
													<td className="border border-slate-700 text-sm">
														{user.isAdmin ? 'Admin' : 'User'}
													</td>
													<td className="border border-slate-700 py-5 text-sm">
														<Button
															className="p-1 rounded bg-red-600 text-white font-semibold"
															onClick={() => dispatch(deleteUser(user.id))}
														>
															Delete
														</Button>
													</td>
												</tr>
											);
										})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
};

export default ProfileAdmin;
