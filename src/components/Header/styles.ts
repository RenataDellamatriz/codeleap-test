import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.blue};
  padding: 1.7rem 2.3rem;

  display: flex;
  justify-content: space-between;
`;
export const Title = styled.h1`
  font-weight: 700;
  font-size: 1.375rem;
  color: ${(props) => props.theme.white};
`;
export const DialogTrigger = styled(Dialog.Trigger)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  color: ${(props) => props.theme.white};
  font-size: 1rem;
  font-weight: 700;
  border: none;
  cursor: pointer;

  svg {
    font-size: 1.375rem;
  }
`;
