import * as Dialog from "@radix-ui/react-dialog";
import { ButtonWrapper, DialogContent, DialogOverlay } from "./styles";
import { selectedUser, setUsername } from "../../store/slices/user";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const userSchema = z.object({
  username: z.string(),
});

type userFormSchema = z.infer<typeof userSchema>;

export function LoginModal({ onCloseModal }: { onCloseModal: () => void }) {
  const dispatch = useDispatch();
  const username = useSelector(selectedUser);

  const { handleSubmit, register } = useForm<userFormSchema>({
    resolver: zodResolver(userSchema),
  });

  function onUserSubmit(data: userFormSchema) {
    dispatch(setUsername({user: data.username})) &&  onCloseModal()   
  }

  useEffect(() => {
    if(username.user) {
      localStorage.setItem('user', username.user)
    }
  },[username])

  useEffect(() => {
    const savedUser = localStorage.getItem('user')
    if (savedUser){
      dispatch(setUsername({user : savedUser}))
    }

  },[])

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
