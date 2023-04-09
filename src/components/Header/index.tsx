import * as Dialog from "@radix-ui/react-dialog";
import {
  DialogTrigger,
  HeaderContainer,
  Title,
  TriggerWrapper,
} from "./styles";
import { LoginModal } from "../LoginModal";
import { useState } from "react";
import { MdLogin, MdLogout } from "react-icons/md";
import { selectedUser } from "../../store/slices/user";
import { useSelector } from "react-redux";
import { LogoutModal } from "../LogoutModal";

export function Header() {
  const username = useSelector(selectedUser);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openLogoutModal, setOpenLogoutModal] = useState(false)

 
  return (
    <HeaderContainer>
      <Title>CodeLeap Network</Title>
      {username.user ? (
        <Dialog.Root open={openLogoutModal} onOpenChange={setOpenLogoutModal}>
          <TriggerWrapper>
            {username.user && (
              <span>
                Hello,<strong> {username.user}</strong>!
              </span>
            )}
            <DialogTrigger>
              <MdLogout />
            </DialogTrigger>
          </TriggerWrapper>

          <LogoutModal onCloseModal={() => setOpenLogoutModal(false)}/>
        </Dialog.Root>
      ) : (
        <>
          <Dialog.Root open={openLoginModal} onOpenChange={setOpenLoginModal}>
            <DialogTrigger>
              <span>login</span> <MdLogin />
            </DialogTrigger>

            <LoginModal onCloseModal={() => setOpenLoginModal(false)} />          
          </Dialog.Root>
        </>
      )}
    </HeaderContainer>
  );
}
