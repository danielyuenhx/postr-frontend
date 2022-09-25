import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Action } from 'history';

type Post = {
	title: string;
	content: string;
	tags: string;
	selectedFile: string;
};

const initialState: any[] = [];

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		getPosts(state, action: PayloadAction<Post[]>) {
			return action?.payload;
		},
		createPost(state, action: PayloadAction<Post>) {
			return [state, action?.payload];
		},
	},
});

export const postsActions = postsSlice.actions;

export default postsSlice.reducer;
