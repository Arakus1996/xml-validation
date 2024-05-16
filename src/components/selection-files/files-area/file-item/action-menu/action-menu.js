import { Btn, Li, Ul, Wrapper } from './action-menu.styled'

export const ActionMenu = ({ handleDelete, fileName }) => {
  return (
    <Wrapper>
      <Ul>
        {/* <Li>
          <Btn onClick={handleOpenDirectory}>Показать в папке</Btn>
        </Li> */}
        <Li>
          <Btn onClick={() => handleDelete(fileName)}>Удалить</Btn>
        </Li>
      </Ul>
    </Wrapper>
  )
}
