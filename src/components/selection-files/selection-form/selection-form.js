import { useContext } from 'react'
import { Button } from '../../shared/button/button'
import { Info } from '../../shared/info/info'
import { InputFile } from '../../shared/input-file/input-file'
import { Directory, P, Path, Title, Wrapper } from './selection-form.styled'
import { StoreContext } from '../../main-page/main-page'
import { checkError } from '../../../utils/errors'
import { validation } from '../../../validation/validation'
import { getDate } from '../../../utils/get-date'

const getLog = async () => {
  const response = await fetch('http://localhost:8080/xml/logs')
  const logs = await response.text()
  return logs
}

const writeLogs = (path, logs) => {
  window.electron.mkdir(`${path}/logs`)
  window.electron.writeFile(`${path}/logs/log-${getDate()}.txt`, logs)
}

export const SelectionForm = ({
  handleChange,
  path,
  directory,
  files,
  fullPath,
  handleRefresh,
}) => {
  const { store, setStore } = useContext(StoreContext)

  const fetchFiles = async fullPath => {
    const notValid = validation(files)
    if (notValid) {
      setStore({
        ...store,
        isLoading: false,
        error: checkError(notValid.error, notValid.payload),
        fileText: null,
      })
      return
    }

    const response = await fetch('http://localhost:8080/xml', {
      method: 'POST',

      body: fullPath,
    })
    const logs = await getLog()
    writeLogs(path, logs)

    if (response.status === 400) {
      const data = await response.json()
      const error = data.message?.split(':')
      let fileName = error?.length === 2 ? error[1] : null

      setStore({
        ...store,
        isLoading: false,
        error: checkError(error?.[0], fileName),
        fileText: null,
      })
    }

    if (response.status === 200) {
      setStore({
        ...store,
        isLoading: false,
        status: response.status,
        error: null,
        fileText: null,
      })
      handleRefresh(fullPath)
    }
  }

  const handleClick = () => {
    setStore({ ...store, fileText: null, isLoading: true })
    fetchFiles(fullPath)
  }

  return (
    <Wrapper>
      <Title>Путь к каталогу</Title>
      {path ? (
        <P>
          <Path>{path}</Path>
          <Directory>{directory}</Directory>
        </P>
      ) : (
        <Info>Выберите путь к каталогу</Info>
      )}
      <InputFile onChange={handleChange} />
      <Button onClick={handleClick} disabled={files.length ? false : true}>
        ЗАПУСТИТЬ ОБРАБОТКУ
      </Button>
    </Wrapper>
  )
}
