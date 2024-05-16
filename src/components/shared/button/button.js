import { ButtonBlock } from './button.styled'

export const Button = ({ children, disabled, onClick }) => (
  <ButtonBlock disabled={disabled} onClick={onClick}>
    {children}
  </ButtonBlock>
)
