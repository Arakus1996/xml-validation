import { useState } from 'react'
import { FilesArea } from './files-area/files-area'
import { Title, Wrapper } from './selection-files.styled'
import { SelectionForm } from './selection-form/selection-form'
// import { openFolderInExplorer } from '../../utils/open-folder'
// import { shell } from 'electron'

export const SelectionFiles = ({ files, setFiles, path, setPath }) => {
  const [directory, setDirectory] = useState('')

  const handleChange = e => {
    setFiles(Array.from(e.target.files))
    console.log(e.target.files)
    if (e.target.files[0]?.path) {
      const path = e.target.files[0].path.split('\\')
      path.pop()
      setDirectory(path.pop())
      setPath(`${path.join('/')}/`)
    }
    e.target.value = ''
  }

  const handleDelete = fileName => {
    setFiles(files.filter(file => file.name !== fileName))
  }

  return (
    <Wrapper>
      <Title>Файлы</Title>
      <FilesArea files={files} handleDelete={handleDelete} />
      <SelectionForm
        files={files}
        handleChange={handleChange}
        path={path}
        directory={directory}
      />
    </Wrapper>
  )
}
