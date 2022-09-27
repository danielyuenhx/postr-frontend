import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Post = {
	_id: string;
	user: string;
	title: string;
	content: string;
	tags: string;
	selectedFile: string;
	likes: [string];
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
			return state.filter((post) => post._id != action.payload);
		},
		updatePost(state, action: PayloadAction<Post>) {
			return state.map((post) =>
				post._id === action.payload._id ? action.payload : post
			);
		},
	},
});

export const postsActions = postsSlice.actions;

export default postsSlice.reducer;
