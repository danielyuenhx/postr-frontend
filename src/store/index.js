import { configureStore } from '@reduxjs/toolkit';

import postsSlice from './posts-slice';
import usersSlice from './users-slice';

const store = configureStore({
	reducer: { postsSlice: postsSlice.reducer, usersSlice: usersSlice.reducer },
});

export default store;
