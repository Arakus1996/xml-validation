import { useContext } from 'react'
import { Button } from '../../shared/button/button'
import { Info } from '../../shared/info/info'
import { InputFile } from '../../shared/input-file/input-file'
import { Directory, P, Path, Title, Wrapper } from './selection-form.styled'
import { StoreContext } from '../../main-page/main-page'
import { checkError } from '../../../utils/errors'
import { validation } from '../../../validation/validation'

export const SelectionForm = ({
  handleChange,
  path,
  directory,
  files,
  fullPath,
}) => {
  const { store, setStore } = useContext(StoreContext)

  const fetchFiles = async fullPath => {
    const notValid = validation(files)
    if (notValid) {
      console.log(`VLAD: ${notValid.error}`)
      setStore({
        ...store,
        isLoading: false,
        error: checkError(notValid.error, notValid.payload),
      })
      return
    }

    const response = await fetch('http://localhost:8080/xml', {
      method: 'POST',

      body: fullPath,
    })

    if (response.status === 400) {
      const data = await response.json()
      const error = data.message?.split(':')
      let fileName = error?.length === 2 ? error[1] : null

      setStore({
        ...store,
        isLoading: false,
        error: checkError(error?.[0], fileName),
      })
    }

    if (response.status === 200) {
      setStore({ ...store, isLoading: false, status: response.status })
    }
  }

  const handleClick = () => {
    setStore({ ...store, isLoading: true })
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
