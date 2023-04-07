import {
  ButtonWrapper,
  DialogTrigger,
  PostContainer,
  PostContent,
  PostHeader,
  PostTitle,
} from "./styles";
import { TbTrashXFilled } from "react-icons/tb";
import { FaRegEdit } from "react-icons/fa";
import { EditModal } from "../../../../components/EditModal";
import * as Dialog from "@radix-ui/react-dialog";
import { DeleteModal } from "../../../../components/DeleteModal";

export function Post() {
  return (
    <PostContainer>
      <PostHeader>
        <PostTitle>My First Post at CodeLeap Network</PostTitle>

        <ButtonWrapper>
          <Dialog.Root>
            <DialogTrigger>
              <TbTrashXFilled />
            </DialogTrigger>

            <DeleteModal />
          </Dialog.Root>

          <Dialog.Root>
            <DialogTrigger>
              <FaRegEdit />
            </DialogTrigger>

            <EditModal />
          </Dialog.Root>
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
