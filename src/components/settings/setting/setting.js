import { CheckBox } from '../../shared/check-box/check-box'
import { SettingBlock, Text, Title, Wrapper } from './setting.styled'

export const Setting = ({ title, text, isChecked, setIsChecked }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <SettingBlock>
        <CheckBox isChecked={isChecked} setIsChecked={setIsChecked} />
        <Text>{text}</Text>
      </SettingBlock>
    </Wrapper>
  )
}
