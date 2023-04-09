import {
  ButtonWrapper,
  DialogTrigger,
  PostContainer,
  PostContent,
  PostDate,
  PostHeader,
  PostTitle,
} from "./styles";
import { TbTrashXFilled } from "react-icons/tb";
import { FaRegEdit } from "react-icons/fa";
import { EditModal } from "../../../../components/EditModal";
import * as Dialog from "@radix-ui/react-dialog";
import { DeleteModal } from "../../../../components/DeleteModal";
import { PostProps } from "../../../../store/slices/posts";
import { PostAuthor } from "./styles";



export function Post({
  title,
  username,
  created_datetime,
  content,
  id
}: PostProps) {

  return (
    <PostContainer>
      <PostHeader>
        <PostTitle>{title}</PostTitle>

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

            <EditModal id={id} />
          </Dialog.Root>
        </ButtonWrapper>
      </PostHeader>

      <PostContent>
        <div>
          <PostAuthor>@{username}</PostAuthor>
          <PostDate>{created_datetime}</PostDate>
        </div>

        <p>{content}</p>
      </PostContent>
    </PostContainer>
  );
}
