import React from 'react';
import axios from 'axios';

import * as api from '../api';
import { authActions } from '../store/auth-slice';
import { AppDispatch } from '../store/index';
import { usersActions } from '../store/users-slice';

type Error = { message: string };

export const deleteUser = (id: string) => async(dispatch: AppDispatch) => {
	try {
		const { data } = await api.deleteUser(id);

		// dispatch(usersActions.getUser(data));
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
			return (error.response?.data as Error).message;
		} else {
			return 'An unexpected error occurred';
		}
	}
}

export const getUser = (username: string) => async (dispatch: AppDispatch) => {
	try {
		const { data } = await api.getUser(username);

		dispatch(usersActions.getUser(data));
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
			return (error.response?.data as Error).message;
		} else {
			return 'An unexpected error occurred';
		}
	}
};

export const pinPost =
	(userId: string, postId: string) => async (dispatch: AppDispatch) => {
		try {
			const { data } = await api.pinPost(userId, postId);
		} catch (error) {
			if (axios.isAxiosError(error) && error.response) {
				return (error.response?.data as Error).message;
			} else {
				return 'An unexpected error occurred';
			}
		}
	};
