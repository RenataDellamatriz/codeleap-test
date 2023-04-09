import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postApi } from "../../../services/postApi";

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

export interface PostsState {
  posts: PostProps[];
}

const initialState: PostsState = {
  posts: [],
};

const createPost = createAsyncThunk(
  `posts/createPost`,
  async (postInput: PostInput) => {
    const res = await postApi.createPost(postInput);
    if (res) {
      return res;
    }
  }
);

const updatePost = createAsyncThunk(
  `posts/updatePost`,
  async (post: PostProps) => {
    const res = await postApi.updatePost(post);

    return res;
  }
);

const deletePost = createAsyncThunk(
  `posts/deletePost`,
  async (post: PostProps) => {
     await postApi.deletePost(post);    
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
      // .addCase(deletePost.fulfilled, (state, action) => {
      //   const filteredPosts = state.posts.filter(
      //     (post) => post.id !== action.payload.posts.id
      //   );

      //   state.posts = filteredPosts
      // });
  },
});

export const { setPostsList } = postsSlice.actions;

export default postsSlice.reducer;
