import { createAsyncThunk } from '@reduxjs/toolkit';
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

//* Get All Users
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

//* Delete Users By Id
export const deleteUser = createAsyncThunk(
	'deleteUser',
	async (id, rejectedWithValue) => {
		try {
			let response = await axios.delete(
				`https://654c39fa77200d6ba858a20a.mockapi.io/users/${id}`
			);
			return response;
		} catch (error) {
			rejectedWithValue(error);
		}
	}
);

//* Get User BY isAdmin
export const getAdmin = createAsyncThunk(
	'getAdmin',
	async (rejectedWithValue) => {
		try {
			const response = await axios.get(
				'https://654c39fa77200d6ba858a20a.mockapi.io/users?isAdmin=true'
			);
			return response.data;
		} catch (error) {
			rejectedWithValue(error);
		}
	}
);
