import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
	name: 'posts',
	initialState: [],
	reducers: {
		fetchPosts(action) {
			return action.payload;
		},
		createPost(state, action) {
			return [...state, action.payload];
		},
	},
});

export const postsActions = postsActions.actions;

export default postsSlice.reducer;