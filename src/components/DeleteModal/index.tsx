import * as Dialog from "@radix-ui/react-dialog";
import { ButtonWrapper, DialogContent, DialogOverlay, DialogTitle } from "./styles";

export function DeleteModal() {
  return (
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle>Are you sure you want to delete this item?</DialogTitle>

        <ButtonWrapper>
          <Dialog.Close>Cancel</Dialog.Close>
          <button>Delete</button>
        </ButtonWrapper>
      </DialogContent>
    </Dialog.Portal>
  );
}
