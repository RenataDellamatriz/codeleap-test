import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postApi } from "../../../services/postApi";
import { User } from "../user";

export interface PostProps {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
}

export interface PostInput {
  title: string;
  content: string;
  username: string;
}

export interface PostUpdateInput {
  title: string;
  content: string;
  id: number;
}

export interface PostsState {
  posts: PostProps[];
}

const initialState: PostsState = {
  posts: [],
};

export const createPost = createAsyncThunk(
  `posts/createPost`,
  async ({ username, title, content }: PostInput) => {
    const res = await postApi.createPost({ username, title, content });
    if (res) {
      return res;
    }
  }
);

export const updatePost = createAsyncThunk(
  `posts/updatePost`,
  async (data: PostUpdateInput) => {
    const res = await postApi.updatePost(data);

    return res;
  }
);

const deletePost = createAsyncThunk(
  `posts/deletePost`,
  async (post: PostProps) => {
    const res = await postApi.deletePost(post);
    return res;
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPostsList: (state, action: PayloadAction<PostProps[]>) => {
      state.posts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload as PostProps);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        const { id, title, content } = action.payload;
        const selectedPost = state.posts.find((post) => post.id === id);
        if (selectedPost) {
          selectedPost.title = title;
          selectedPost.content = content;
        }
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter(({ id }) => id !== action.payload);
      });
  },
});

export const { setPostsList } = postsSlice.actions;

export const create = createPost;

export default postsSlice.reducer;
