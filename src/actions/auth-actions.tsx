import React from 'react';
import axios from 'axios';

import * as api from '../api';
import { authActions } from '../store/auth-slice';
import { AppDispatch } from '../store/index';

type User = { username: string; password: string };
type NewUser = { username: string; password: string; confirmPassword: string };

export const createUser =
	(userData: NewUser) => async (dispatch: AppDispatch) => {
		try {
			const { data } = await api.createUser(userData);
			dispatch(authActions.auth(data));
		} catch (error) {
			if (axios.isAxiosError(error)) {
				return error.message;
			} else {
				return 'An unexpected error occurred';
			}
		}
	};

export const loginUser = (userData: User) => async (dispatch: AppDispatch) => {
	try {
		const { data } = await api.loginUser(userData);
		dispatch(authActions.auth(data));
	} catch (error) {
		if (axios.isAxiosError(error)) {
			return error.response?.status;
		} else {
			return 'An unexpected error occurred';
		}
	}
};

// export const logoutUser = () => async (dispatch: AppDispatch) => {
//     dispatch(authActions.logout());
// }