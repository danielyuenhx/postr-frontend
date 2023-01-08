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
	createdAt: Date;
};

type NewPost = {
	user: string;
	title: string;
	content: string;
	tags: string;
	selectedFile: string;
	picture: string;
};

type Error = { message: string };

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
	(postData: NewPost) => async (dispatch: AppDispatch) => {
		try {
			const { data } = await api.createPost(postData);
			const updatedData = {...data, picture: postData.picture}

			dispatch(postsActions.createPost(updatedData));
		} catch (error) {
			if (axios.isAxiosError(error) && error.response) {
				return (error.response?.data as Error).message;
			} else {
				return 'An unexpected error occurred';
			}
		}
	};

export const deletePost = (id: string) => async (dispatch: AppDispatch) => {
	try {
		await api.deletePost(id);

		dispatch(postsActions.deletePost(id));
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
			return (error.response?.data as Error).message;
		} else {
			return 'An unexpected error occurred';
		}
	}
};

export const likePost = (id: string) => async (dispatch: AppDispatch) => {
	try {
		const { data } = await api.likePost(id);

		dispatch(postsActions.updatePost(data));
	} catch (error) {
		if (axios.isAxiosError(error) && error.response) {
			return (error.response?.data as Error).message;
		} else {
			return 'An unexpected error occurred';
		}
	}
};
