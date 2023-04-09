import axios from "axios";
import { PostInput, PostProps, PostUpdateInput } from "../store/slices/posts";

const fetchAllPosts = async () => {
  try {
    const response = await axios.get("https://dev.codeleap.co.uk/careers/");
    return response.data.results as PostProps;
  } catch (error) {
    throw new Error
  }
};

const createPost = async ({ content, title, username }: PostInput) => {
  const newPost = {
    username: username,
    title: title,
    content: content,
  };
  try {
    const res = await axios.post(
      `https://dev.codeleap.co.uk/careers/`,
      newPost
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const updatePost = async (data: PostUpdateInput) => {
  const body = {
    title: data.title,
    content: data.content,
  };

  try {
    const res = await axios.patch(
      `https://dev.codeleap.co.uk/careers/${data.id}/`,
      body
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const deletePost = async (id: number) => {
  try {
    const res = await axios.delete(
      `https://dev.codeleap.co.uk/careers/${id}/`, {}
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const postApi = {
  fetchAllPosts,
  createPost,
  updatePost,
  deletePost,
};
