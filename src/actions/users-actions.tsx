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

export const updatePicture =
	(userId: string, image: string) => async (dispatch: AppDispatch) => {
		try {
			const { data } = await api.updatePicture(userId, image);

			const item = localStorage.getItem('profile');
			const profile = item === null ? null : JSON.parse(item);
			
			profile.result.picture = data.result.picture;

			localStorage.setItem('profile', JSON.stringify(profile));
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

			const item = localStorage.getItem('profile');
			const profile = item === null ? null : JSON.parse(item);
			
			profile.result.pinnedPost = data.result.pinnedPost;

			localStorage.setItem('profile', JSON.stringify(profile));
		} catch (error) {
			if (axios.isAxiosError(error) && error.response) {
				return (error.response?.data as Error).message;
			} else {
				return 'An unexpected error occurred';
			}
		}
	};
