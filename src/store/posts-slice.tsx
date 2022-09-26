import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Post = {
	id: string;
	user: string;
	title: string;
	content: string;
	tags: string;
	selectedFile: string;
	likeCount: number;
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
			return [...state, action?.payload];
		},
		deletePost(state, action: PayloadAction<string>) {
            console.log('testing')
			return state.filter((post) => post._id != action.payload);
		},
	},
});

export const postsActions = postsSlice.actions;

export default postsSlice.reducer;
