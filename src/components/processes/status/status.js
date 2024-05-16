import { Text, Wrapper } from './status.styled'

export const Status = ({ text, Icon }) => {
  return (
    <Wrapper>
      <Icon />
      {/* <Preloader /> */}
      <Text>{text}</Text>
    </Wrapper>
  )
}
