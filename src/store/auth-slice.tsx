import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = { username: string; password: string };

const initialState = { result: { username: '', password: '' }, token: '' };

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		auth(state, action: PayloadAction<User>) {
			localStorage.setItem(
				'profile',
				JSON.stringify({ ...action?.payload })
			);
			return { ...state, authData: action?.payload };
		},
        logout(state) {
            localStorage.clear();
			return { ...state, authData: null };
        }
	},
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
