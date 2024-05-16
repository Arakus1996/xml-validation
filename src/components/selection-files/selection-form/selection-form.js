import { useContext } from 'react'
import { Button } from '../../shared/button/button'
import { Info } from '../../shared/info/info'
import { InputFile } from '../../shared/input-file/input-file'
import { Directory, P, Path, Title, Wrapper } from './selection-form.styled'
import { StoreContext } from '../../main-page/main-page'

export const SelectionForm = ({ handleChange, path, directory, files }) => {
  const { store, setStore } = useContext(StoreContext)
  //TODO: доделать
  const stop = async () => {
    await new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, 2000)
    })
  }
  const fetchFiles = async () => {
    // const response = await fetch('url', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //   },
    //   body: '',
    // })
    // const result = await response.blob
    await stop()
    setStore({ ...store, isLoading: false, status: 200, data: 'my data' })
    // return { status: 200, data: 'my data' }
  }

  const handleClick = () => {
    setStore({ ...store, isLoading: true })
    fetchFiles()
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
