import * as Dialog from "@radix-ui/react-dialog";
import {
  DialogTrigger,
  HeaderContainer,
  Title,
  TriggerWrapper,
} from "./styles";
import { LoginModal } from "../LoginModal";
import { useState } from "react";
import { MdLogin } from "react-icons/md";
import { selectedUser } from "../../store/slices/user";
import { useSelector } from "react-redux";


export function Header() {
  const username = useSelector(selectedUser);
  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

  return (
    <HeaderContainer>
      <Title>CodeLeap Network</Title>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <TriggerWrapper>
          {username.user && (
            <span>
              Hello,<strong> {username.user}</strong>!
            </span>
          )}
          <DialogTrigger>
            {username.user ? (
              <MdLogin />
            ) : (
              <>
                <span>login</span> <MdLogin />
              </>
            )}
          </DialogTrigger>
        </TriggerWrapper>

        <LoginModal onCloseModal={closeModal} />
      </Dialog.Root>
    </HeaderContainer>
  );
}
