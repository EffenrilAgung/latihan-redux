import { createSlice } from '@reduxjs/toolkit';
import { createUser, deleteUser, getAdmin, getUser } from './actionUserDetails';

export const userDetails = createSlice({
	name: 'userDetails',
	initialState: {
		users: [],
		loading: false,
		error: null,
	},
	extraReducers: {
		[createUser.pending]: (state) => {
			state.loading = true;
		},
		[createUser.fulfilled]: (state, action) => {
			state.loading = false;
			state.users.push(action.payload);
		},
		[createUser.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		},
		[getUser.pending]: (state) => {
			state.loading = true;
		},
		[getUser.fulfilled]: (state, action) => {
			state.loading = false;
			state.users = action.payload;
		},
		[getUser.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		},
		[deleteUser.pending]: (state) => {
			state.loading = true;
		},
		[deleteUser.fulfilled]: (state, action) => {
			state.loading = false;

			const { id } = action.payload;

			if (id) {
				state.users = state.users.filter((user) => user.id !== id);
			}

			console.log('delete action', action.payload);
		},
		[deleteUser.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		},
		[getAdmin.pending]: (state) => {
			state.loading = true;
		},
		[getAdmin.fulfilled]: (state, action) => {
			state.loading = false;
			const { id } = action.payload;

			if (id) {
				state.users = state.users.filter((user) => user.isAdmin === true);
			}

			// console.log('getAdmin action', action.payload);
		},
		[getAdmin.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		},
	},
});

export default userDetails.reducer;
