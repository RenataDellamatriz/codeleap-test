
import { Form } from "./components/Form";
import { Post } from "./components/Post";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Form/>
      <Post/>
    </HomeContainer>
  );
}
