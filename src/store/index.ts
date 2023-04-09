import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/user/index';
import postsSlice from './slices/posts/index';


export const store = configureStore({
  reducer: {
    user: userSlice,
    posts: postsSlice
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch