import { configureStore } from '@reduxjs/toolkit';

// import postsSlice from './posts-slice';
import authSlice from './auth-slice';

const store = configureStore({
	reducer: { authSlice },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
