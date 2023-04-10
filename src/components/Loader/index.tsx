import { Triangle } from "react-loader-spinner";
import codeleapLogo from "../../assets/codeleap-logo.svg";
import { ImageContainer } from "./styles";

export function Loader() {
  return (
    <ImageContainer>
      <img src={codeleapLogo} alt="" />
      <Triangle color="black"/>
    </ImageContainer>
  );
}
