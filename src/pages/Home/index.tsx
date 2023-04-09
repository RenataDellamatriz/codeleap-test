import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { Post } from "./components/Post";
import { HomeContainer } from "./styles";
import { PostProps } from "../../store/slices/posts";
import { postApi } from "../../services/postApi";
import { formatDistanceToNow } from "date-fns";

export function Home() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    async function getData() {
      const post = await postApi.fetchAllPosts();
      if (post) {
        setPosts(post);
      }
    }
    getData();
  }, []);

  return (
    <HomeContainer>
      <Form />
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            content={post.content}
            created_datetime={post.created_datetime && formatDistanceToNow(
              new Date(post.created_datetime),
              {
                addSuffix: true,
              }
            )}
            username={post.username}
            title={post.title}
          />
        );
      })}
    </HomeContainer>
  );
}
