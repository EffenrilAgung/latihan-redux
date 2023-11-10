import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// * Create Action
export const createUser = createAsyncThunk(
	'createUser',
	async (data, rejectedWithValue) => {
		try {
			const response = await axios.post(
				'https://654c39fa77200d6ba858a20a.mockapi.io/users',
				data
			);
			return response.data;
		} catch (error) {
			return rejectedWithValue(error);
		}
	}
);

export const getUser = createAsyncThunk(
	'getUser',
	async (rejectedWithValue) => {
		try {
			const response = await axios.get(
				'https://654c39fa77200d6ba858a20a.mockapi.io/users'
			);
			return response.data;
		} catch (error) {
			return rejectedWithValue(error);
		}
	}
);

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
	},
});

export default userDetails.reducer;
