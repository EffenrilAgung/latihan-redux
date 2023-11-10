import { configureStore } from '@reduxjs/toolkit';
import userDetails from '../feature/userDetailsSlice';

export const store = configureStore({
	reducer: {
		app: userDetails,
	},
});
