import axios from "axios";
import { PostInput, PostProps } from "../store/slices/posts";

const fetchAllPosts = async () => {
  try {
    const response = await axios.get("https://dev.codeleap.co.uk/careers/");
    return response.data.results as PostProps;
  } catch (error) {
    console.log(error);
  }
};

const createPost = async (postInput: PostInput) => {
  try {
    const response = await axios.post(
      `https://dev.codeleap.co.uk/careers/`,
      postInput
    );
    return response.data.results as PostProps;
  } catch (error) {
    console.log(error);
  }
};

const updatePost = async (post: PostProps) => {
  try {
    const res = await axios.patch(
      `https://dev.codeleap.co.uk/careers/${post.id}`,
      { content: post.content, title: post.title }
    );
    return res.data.results;
  } catch (error) {
    console.log(error);
  }
};

const deletePost =  async (post : PostProps) => {
  try {
    const res = await axios.delete(`https://dev.codeleap.co.uk/careers/${post.id}`) 
    return res.data   
  }catch(error) {
    console.log(error)
  }
}

export const postApi = {
  fetchAllPosts,
  createPost,
  updatePost,
  deletePost
};
