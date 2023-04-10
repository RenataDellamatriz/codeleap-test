import { useSelector } from "react-redux";
import {
  FieldsWrapper,
  FormContainer,
  FormButton,
  FormButtonWrapper,
  FormTitle,
} from "./styles";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { selectedUser } from "../../../../store/slices/user";
import { createPost } from "../../../../store/slices/posts";


const postSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1).max(144),    
});

type postFormSchema = z.infer<typeof postSchema>;

export function Form() {
  const { user } = useSelector(selectedUser);
  const dispatch = useAppDispatch();

  const { handleSubmit, register, reset, formState } = useForm<postFormSchema>({
    resolver: zodResolver(postSchema),
  });



  async function onPostSubmit({title, content}: postFormSchema) {
   const newPost = {title: title, content: content, username: user}
    await dispatch(createPost(newPost)) && reset()   
  }

  

  return (
    <FormContainer onSubmit={handleSubmit(onPostSubmit)}>
      <FormTitle> What's on your mind?</FormTitle>
      <FieldsWrapper>
        <label>Title</label>
        <input placeholder="Hello world" {...register("title")} />
      </FieldsWrapper>

      <FieldsWrapper>
        <label>Content</label>
        <textarea placeholder="Content here" {...register("content")}/>
      </FieldsWrapper>

      <FormButtonWrapper>
        <FormButton type="submit" disabled={!user || !formState.isValid}>
          Create
        </FormButton>
      </FormButtonWrapper>
    </FormContainer>
  );
}
