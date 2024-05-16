import { Icon, Text, Wrapper } from './info.styled'
import { ReactComponent as AttentionSVG } from '../../../images/attention.svg'

export const Info = ({ children }) => {
  return (
    <Wrapper>
      <Icon>
        <AttentionSVG />
      </Icon>
      <Text>{children}</Text>
    </Wrapper>
  )
}
