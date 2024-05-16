import { Text, Wrapper } from './status.styled'

export const Status = ({ text, Icon }) => {
  return (
    <Wrapper>
      <Icon />
      <Text>{text}</Text>
    </Wrapper>
  )
}
