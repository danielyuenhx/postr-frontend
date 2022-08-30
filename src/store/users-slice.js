import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
	name: 'users',
	initialState: [],
	reducers: {
		createUser(state, action) {
			return [...state, action.payload];
		},
	},
});

export const usersActions = usersActions.actions;

export default usersSlice.reducer;