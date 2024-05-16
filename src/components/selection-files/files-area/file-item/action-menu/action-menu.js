import { Btn, Li, Ul, Wrapper } from './action-menu.styled'

export const ActionMenu = ({
  fileName,
  handleDelete,
  handleOpenDir,
  setIsOpen,
}) => {
  const openDirectory = e => {
    e.stopPropagation()
    handleOpenDir()
    setIsOpen(false)
  }
  const deleteFile = e => {
    e.stopPropagation()
    handleDelete(fileName)
    setIsOpen(false)
  }
  return (
    <Wrapper>
      <Ul>
        <Li>
          <Btn onClick={openDirectory}>Показать в папке</Btn>
        </Li>
        <Li>
          <Btn onClick={deleteFile}>Удалить</Btn>
        </Li>
      </Ul>
    </Wrapper>
  )
}
