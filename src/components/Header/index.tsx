import * as Dialog from "@radix-ui/react-dialog";
import { DialogTrigger, HeaderContainer, Title } from "./styles";
import { LoginModal } from "../LoginModal";
import { useState } from "react";
import {MdLogin} from 'react-icons/md'

export function Header() {
  const [open, setOpen] = useState(false)

  function closeModal(){
    setOpen(false)
  }
  
  return (
    <HeaderContainer>
      <Title>CodeLeap Network</Title>
      <Dialog.Root 
      open={open} 
      onOpenChange={setOpen}
      >
        <DialogTrigger >
         Login <MdLogin/>
        </DialogTrigger>

        <LoginModal 
        onCloseModal={closeModal}
        />
      </Dialog.Root>
    </HeaderContainer>
  )
}
