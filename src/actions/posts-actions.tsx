import React from 'react';
import axios from 'axios';

import * as api from '../api';
import { postsActions } from '../store/posts-slice';
import { AppDispatch } from '../store/index';

type Post = {
    user: string;
	title: string;
	content: string;
	tags: string;
	selectedFile: string;
};

type Error = { message: string }

export const getPosts = () => async (dispatch: AppDispatch) => {
	try {
		const { data } = await api.getPosts();

		dispatch(postsActions.getPosts(data));
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
            return (error.response?.data as Error).message;
		} else {
			return 'An unexpected error occurred';
		}
	}
};

export const createPost =
	(postData: Post) => async (dispatch: AppDispatch) => {
		try {
			const { data } = await api.createPost(postData);

			dispatch(postsActions.createPost(data));
		} catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                return (error.response?.data as Error).message;
            } else {
                return 'An unexpected error occurred';
            }
		}
	};

// export const logoutUser = () => async (dispatch: AppDispatch) => {
//     dispatch(authActions.logout());
// }
