import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
	username: '',
	createdAt: '',
	totalLikes: 0,
	totalPosts: 0,
  pinnedPost: '',
	picture: '',
};

type User = {
	username: string;
	createdAt: string;
	totalLikes: number;
	totalPosts: number;
  pinnedPost: string;
	picture: string;
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
		updateUser(state, action: PayloadAction<User>) {
			return {
				...state,
				...action?.payload,
			};
		},
	},
});

export const usersActions = usersSlice.actions;

export default usersSlice.reducer;
