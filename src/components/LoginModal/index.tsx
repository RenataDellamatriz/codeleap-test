import * as Dialog from "@radix-ui/react-dialog";
import { ButtonWrapper, DialogContent, DialogOverlay } from "./styles";

export function LoginModal({onCloseModal}:{onCloseModal:() => void}) {

  return (
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
        <Dialog.Title>Welcome to CodeLeap network</Dialog.Title>
        <Dialog.Close />

        <form action="">
          <div>
            <label>Please enter your username</label>
            <input type="text" placeholder="John Doe" />
          </div>
          <ButtonWrapper>
            <button>Enter</button>
          </ButtonWrapper>
        </form>
      </DialogContent>
    </Dialog.Portal>
  );
}
