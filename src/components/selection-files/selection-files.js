import { useContext, useState } from 'react'
import { Head, Refresh, Title, Wrapper } from './selection-files.styled'
import { SelectionForm } from './selection-form/selection-form'
import { StoreContext } from '../main-page/main-page'
import { FilesArea } from '../files-area/files-area'

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
    const pathArr = e.target.files[0].path.split('\\')
    pathArr.pop()
    const path = pathArr.join('\\')
    setFullPath(path)
    setFiles(window.electron.readDirectory(path))
    setDirectory(pathArr[pathArr.length - 1])
    setPath(`${pathArr.join('/')}/`)
    setStore({ ...store, status: null, fileText: null })

    e.target.value = ''
  }

  const handleRefresh = () => {
    setFiles(window.electron.readDirectory(fullPath))
  }

  const handleDelete = fileName => {
    window.electron.deleteFile(`${fullPath}\\${fileName}`)
    setFiles(files.filter(file => file !== fileName))
  }

  const handleOpenDir = () => {
    window.electron.openDirectory(`${fullPath}`)
  }

  const handleRefreshBtn = () => {
    handleRefresh()
    setStore({ ...store, fileText: null, status: null })
  }

  return (
    <Wrapper>
      <Head>
        <Title>Файлы</Title>
        <Refresh onClick={handleRefreshBtn} />
      </Head>

      <FilesArea
        files={files}
        fullPath={fullPath}
        handleDelete={handleDelete}
        handleOpenDir={handleOpenDir}
        helper={'Файлы для обработки не найдены'}
      />
      <SelectionForm
        files={files}
        handleChange={handleChange}
        path={path}
        fullPath={fullPath}
        directory={directory}
        handleRefresh={handleRefresh}
      />
    </Wrapper>
  )
}
