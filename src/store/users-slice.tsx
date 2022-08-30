import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = { username: string; password: string };

const initialState: User[] = [];

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		createUser(state, action: PayloadAction<User>) {
			return [...state, action.payload];
		},
	},
});

export const usersActions = usersSlice.actions;

export default usersSlice.reducer;
