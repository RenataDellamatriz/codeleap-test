import { useSelector } from "react-redux";
import {
  FieldsWrapper,
  FormContainer,
  FormButton,
  FormButtonWrapper,
  FormTitle,
} from "./styles";
import { selectedUser } from "../../../../store/slices/user";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPost } from "../../../../store/slices/posts";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";

const postSchema = z.object({
  title: z.string(),
  content: z.string(),   
 
});

type postFormSchema = z.infer<typeof postSchema>;

export function Form() {
  const { user } = useSelector(selectedUser);
  const dispatch = useAppDispatch();

  const { handleSubmit, register, reset } = useForm<postFormSchema>({
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
        <FormButton type="submit" disabled={!user}>
          Create
        </FormButton>
      </FormButtonWrapper>
    </FormContainer>
  );
}
