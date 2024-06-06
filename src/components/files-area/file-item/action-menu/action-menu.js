import { useContext } from 'react'
import { Btn, Li, Ul, Wrapper } from './action-menu.styled'
import { StoreContext } from '../../../main-page/main-page'

export const ActionMenu = ({
  fileName,
  handleDelete,
  handleOpenDir,
  setIsOpen,
  fullPath,
}) => {
  const { store, setStore } = useContext(StoreContext)

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

  const openFile = e => {
    e.stopPropagation()
    setStore({
      ...store,
      fileText: window.electron.readFile(`${fullPath}\\${fileName}`),
    })
    setIsOpen(false)
  }

  return (
    <Wrapper>
      <Ul>
        <Li>
          <Btn onClick={openFile}>Посмотреть</Btn>
        </Li>
        {handleOpenDir && (
          <Li>
            <Btn onClick={openDirectory}>Показать в папке</Btn>
          </Li>
        )}
        {handleDelete && (
          <Li>
            <Btn onClick={deleteFile}>Удалить</Btn>
          </Li>
        )}
      </Ul>
    </Wrapper>
  )
}
