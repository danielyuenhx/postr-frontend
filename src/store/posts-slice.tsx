import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Post = {
    id: string;
    user: string;
	title: string;
	content: string;
	tags: string;
	selectedFile: string;
    createdAt: Date;
};

const initialState: any[] = [];

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		getPosts(state, action: PayloadAction<Post[]>) {
			return action?.payload;
		},
		createPost(state, action: PayloadAction<Post[]>) {
            console.log("ARRAY" + [state,action?.payload])
			return [...state, action?.payload];
		},
	},
});

export const postsActions = postsSlice.actions;

export default postsSlice.reducer;
