import { ButtonContainer, ButtonTwoContainer } from "./styles";
import IButton from "./types";

export function Button({title, ...rest}: IButton) {
  return (
    <ButtonContainer  {...rest}>
      {title}
    </ButtonContainer>
  )
}

export function ButtonTwo({title, ...rest}: IButton) {
  return (
    <ButtonTwoContainer  {...rest}>
      {title}
    </ButtonTwoContainer>

  )
}