import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
	username: '',
	createdAt: '',
	totalLikes: 0,
	totalPosts: 0,
};

type User = {
	username: string;
	createdAt: string;
	totalLikes: number;
	totalPosts: number;
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		getUser(state, action: PayloadAction<User>) {
			return {
				...state,
				...action?.payload,
			};
		},
	},
});

export const usersActions = usersSlice.actions;

export default usersSlice.reducer;