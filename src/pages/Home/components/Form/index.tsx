import {
  FieldsWrapper,
  FormContainer,
  FormButton,
  FormButtonWrapper,
  FormTitle,
} from "./styles";

export function Form() {
  return (
    <FormContainer>
      <FormTitle> What's on your mind?</FormTitle>
      <FieldsWrapper>
        <label>Title</label>
        <input placeholder="Hello world" />
      </FieldsWrapper>

      <FieldsWrapper>
        <label>Content</label>
        <textarea placeholder="Content here" />
      </FieldsWrapper>

      <FormButtonWrapper>
        <FormButton>Create</FormButton>
      </FormButtonWrapper>
    </FormContainer>
  );
}
