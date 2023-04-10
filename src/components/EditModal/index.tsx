import * as Dialog from "@radix-ui/react-dialog";
import {
  ButtonWrapper,
  DialogContent,
  DialogOverlay,
  FieldsWrapper,
} from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { updatePost } from "../../store/slices/posts";



interface EditModalProps {
  id: number;
  onCloseModal: () => void;
}

const editPostSchema = z.object({
  title: z.string(),
  content: z.string(),
});

type editPostFormSchema = z.infer<typeof editPostSchema>;

export function EditModal(
  {id, onCloseModal} : EditModalProps
) {
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<editPostFormSchema>({
    resolver: zodResolver(editPostSchema),
  });

  async function onEditSubmit({ title, content }: editPostFormSchema) {
    const editPost = {
      title: title,
      content: content,
      id: id,
    };
    (await dispatch(updatePost(editPost))) && reset();     
    onCloseModal()
  }

  return (
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
        <Dialog.Title>Edit item</Dialog.Title>

        <form onSubmit={handleSubmit(onEditSubmit)}>
          <FieldsWrapper>
            <div>
              <label>Title</label>
              <input
                type="text"
                placeholder="John Doe"
                {...register("title")}
              />
            </div>
            <div>
              <label>Content</label>
              <textarea placeholder="Content here" {...register("content")} />
            </div>
          </FieldsWrapper>

          <ButtonWrapper>
            <Dialog.Close>Cancel</Dialog.Close>
            <button type="submit">Save</button>
          </ButtonWrapper>
        </form>
      </DialogContent>
    </Dialog.Portal>
  );
}
