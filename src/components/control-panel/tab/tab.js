import { Rectangle, TabBox } from './tab.styled'

//input radio
export const Tab = ({ isActive, Image, onClick }) => {
  return (
    <TabBox onClick={onClick} $active={isActive}>
      {isActive && <Rectangle />}
      <Image />
    </TabBox>
  )
}
