import * as Dialog from "@radix-ui/react-dialog";
import { ButtonWrapper, DialogContent, DialogOverlay } from "./styles";
import { setUsername } from "../../store/slices/user";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";

const userSchema = z.object({
  username: z.string(),
});

type userFormSchema = z.infer<typeof userSchema>;

export function LoginModal({ onCloseModal }: { onCloseModal: () => void }) {
  const dispatch = useDispatch();
  
  const { handleSubmit, register } = useForm<userFormSchema>({
    resolver: zodResolver(userSchema),
  });

  function onUserSubmit(data: userFormSchema) {
    dispatch(setUsername({ user: data.username})) &&
      onCloseModal();
  }

  return (
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
        <Dialog.Title>Welcome to CodeLeap network</Dialog.Title>
        <Dialog.Close />

        <form onSubmit={handleSubmit(onUserSubmit)}>
          <div>
            <label>Please enter your username</label>
            <input
              type="text"
              placeholder="John Doe"
              {...register("username")}
            />
          </div>
          <ButtonWrapper>
            <button type="submit">Enter</button>
          </ButtonWrapper>
        </form>
      </DialogContent>
    </Dialog.Portal>
  );
}
