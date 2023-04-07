import {
  ButtonWrapper,
  PostAuthor,
  PostContainer,
  PostContent,
  PostHeader,
  PostTitle,
} from "./styles";
import { TbTrashXFilled } from "react-icons/tb";
import { FaRegEdit } from "react-icons/fa";

export function Post() {
  return (
    <PostContainer>
      <PostHeader>
        <PostTitle>My First Post at CodeLeap Network</PostTitle>

        <ButtonWrapper>
          <button>
            <TbTrashXFilled />
          </button>

          <button>
            <FaRegEdit />
          </button>
        </ButtonWrapper>
      </PostHeader>

      <PostContent>
        <div>
          <span>@Vitor</span>
          <span>25 minutes ago</span>
        </div>

        <p>
          Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum
          elit. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula
          mattis placerat. Duis vel nibh at velit scelerisque suscipit. Duis
          lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus
          feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis
          lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
        </p>
      </PostContent>
    </PostContainer>
  );
}
