import { configureStore } from '@reduxjs/toolkit';

// import postsSlice from './posts-slice';
import auth from './auth-slice';
import posts from './posts-slice';
import users from './users-slice';

const store = configureStore({
	reducer: { auth, posts, users },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
