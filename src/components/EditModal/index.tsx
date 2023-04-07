import * as Dialog from "@radix-ui/react-dialog";
import {
  ButtonWrapper,
  DialogContent,
  DialogOverlay,
  FieldsWrapper,
} from "./styles";

export function EditModal() {
  return (
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
        <Dialog.Title>Edit item</Dialog.Title>

        <form action="">
          <FieldsWrapper>
            <div>
              <label>Title</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div>
              <label>Content</label>
              <textarea placeholder="Content here" />
            </div>
          </FieldsWrapper>

          <ButtonWrapper>
            <Dialog.Close>Cancel</Dialog.Close>
            <button>Save</button>
          </ButtonWrapper>
        </form>
      </DialogContent>
    </Dialog.Portal>
  );
}
