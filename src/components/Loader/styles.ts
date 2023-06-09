import styled from 'styled-components'

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  background-color: ${(props) => props.theme.white};
  img {
    width: 80%;
    max-width: 600px;
    object-fit: contain;
  }
`
