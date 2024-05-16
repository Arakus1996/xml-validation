import { useContext, useState } from 'react'
import { FilesArea } from './files-area/files-area'
import { Title, Wrapper } from './selection-files.styled'
import { SelectionForm } from './selection-form/selection-form'
import { StoreContext } from '../main-page/main-page'

export const SelectionFiles = ({
  files,
  setFiles,
  path,
  setPath,
  setFullPath,
  fullPath,
}) => {
  const [directory, setDirectory] = useState('')
  const { store, setStore } = useContext(StoreContext)

  const handleChange = e => {
    setStore({ ...store, status: null })
    setFiles(Array.from(e.target.files))

    if (e.target.files[0]?.path) {
      const path = e.target.files[0].path.split('\\')
      path.pop()
      setFullPath(path.join('\\'))
      setDirectory(path.pop())
      setPath(`${path.join('/')}/`)
    }
    e.target.value = ''
  }

  const handleDelete = fileName => {
    window.electron.deleteFile(`${fullPath}\\${fileName}`)
    setFiles(files.filter(file => file.name !== fileName))
  }

  const handleOpenDir = () => {
    window.electron.openDirectory(`${fullPath}`)
  }

  return (
    <Wrapper>
      <Title>Файлы</Title>
      <FilesArea
        files={files}
        fullPath={fullPath}
        handleDelete={handleDelete}
        handleOpenDir={handleOpenDir}
      />
      <SelectionForm
        files={files}
        handleChange={handleChange}
        path={path}
        fullPath={fullPath}
        directory={directory}
      />
    </Wrapper>
  )
}
