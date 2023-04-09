import * as Dialog from "@radix-ui/react-dialog";
import { ButtonWrapper, DialogContent, DialogOverlay, DialogTitle } from "./styles";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { deletePost } from "../../store/slices/posts";
import { postApi } from "../../services/postApi";

interface DeleteModal {
  id: number
  onCloseModal: () => void;
}

export function DeleteModal({id, onCloseModal} : DeleteModal) {
  const dispatch = useAppDispatch();
  

  async function onDeletePost() {       
    await dispatch(deletePost(id)) 
    await postApi.fetchAllPosts()
    onCloseModal()      
  }

  return (
    <Dialog.Portal>
      <DialogOverlay />
      <DialogContent>
        <DialogTitle>Are you sure you want to delete this item?</DialogTitle>

        <ButtonWrapper>
          <Dialog.Close>Cancel</Dialog.Close>
          <button onClick={() => onDeletePost}>Delete</button>
        </ButtonWrapper>
      </DialogContent>
    </Dialog.Portal>
  );
}
