import { Rectangle, TabBox } from './tab.styled'

export const Tab = ({ isActive, Image, onClick }) => {
  return (
    <TabBox onClick={onClick} $active={isActive}>
      {isActive && <Rectangle />}
      <Image />
    </TabBox>
  )
}
