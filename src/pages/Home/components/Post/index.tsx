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
import { useEffect, useState } from "react";
import { postApi } from "../../../../services/postApi";
import { PostProps } from "../../../../store/slices/posts";

export function Post({ title, username, created_datetime, content }: PostProps) {
  
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

            <EditModal />
          </Dialog.Root>
        </ButtonWrapper>
      </PostHeader>

      <PostContent>
        <div>
          <span>@{username}</span>
          <span>{created_datetime}</span>
        </div>

        <p>{content}</p>
      </PostContent>
    </PostContainer>
  );
}
