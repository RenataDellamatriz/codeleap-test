import styled from "styled-components";

export const FormContainer = styled.form`
  width: 100%;
  padding: 1.5rem;
  border: solid 1px ${(props) => props.theme["border-sections"]};
  border-radius: 8px;
`;

export const FormTitle = styled.h1`
  font-weight: 700;
  font-size: 1.375rem;
`;

export const FieldsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  margin-top: 1.5rem;

  input,
  textarea {
    border: solid 1px ${(props) => props.theme["border-fields"]};
    border-radius: 8px;
    padding: 8px;
    margin-top: 8px;
  }

  textarea {
    height: 4.6rem;
    resize: none;
  }
`;

export const FormButtonWrapper = styled.div`
  width: 100%; 
  display: flex;
  justify-content: flex-end;
`;

export const FormButton = styled.button`
  margin-top: 1.5rem;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.white};

  width: 7.5rem;
  padding: 0.4rem;
  cursor: pointer;
  :disabled {
    cursor: not-allowed;
  }
`;
