import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
	result: {
		username: string;
		id: string;
		createdAt: Date;
		notification: boolean;
	};
	token: string;
};

const initialState = {
	result: {
		username: '',
		id: '',
		createdAt: new Date(),
		notification: false,
	},
	token: '',
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		auth(state, action: PayloadAction<User>) {
			localStorage.setItem(
				'profile',
				JSON.stringify({ ...action?.payload })
			);
			return { ...state, ...action?.payload };
		},
		logout(state) {
			localStorage.removeItem('profile');
			return {
				result: {
					username: '',
					id: '',
					createdAt: new Date(),
					notification: false,
				},
				token: '',
			};
		},
	},
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
