import React from 'react';
import axios from 'axios';

import * as api from '../api';
import { usersActions } from '../store/users-slice';
import { AppDispatch } from '../store/index';

type User = { username: string; password: string };

export const createUser = (userData: User) => async (dispatch: AppDispatch) => {
	try {
		const { data } = await api.createUser(userData);
		dispatch(usersActions.createUser(data));
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.log('error message: ', error.message);
			return error.message;
		} else {
			console.log('unexpected error: ', error);
			return 'An unexpected error occurred';
		}
	}
};