import { useContext } from 'react'
import { Header } from '../shared/header/header'
import { Preloader } from '../shared/preloader/preloader'
import {
  Block,
  ErrorIcon,
  ReadyIcon,
  SuccessIcon,
  TextArea,
  Wrapper,
} from './processes.styled'
import { Status } from './status/status'
import { StoreContext } from '../main-page/main-page'
import { PopUpError } from '../pop-up/pop-up'

const StatusApp = ({ path, files }) => {
  const { store } = useContext(StoreContext)

  if (store.isLoading === true) {
    return <Status text={'Выполняется обработка файлов...'} Icon={Preloader} />
  }

  if (store?.status === 200) {
    return (
      <Status text={'Обработка файлов завершена успешно.'} Icon={SuccessIcon} />
    )
  }

  if (!path) {
    return <Status text={'Не задан путь к каталогу'} Icon={ErrorIcon} />
  } else if (!files.length) {
    return <Status text={'Файлы для обработки не найдены.'} Icon={ErrorIcon} />
  } else if (files.length) {
    return <Status text={'Приложение готово к работе.'} Icon={ReadyIcon} />
  }
}

export const Processes = ({ path, files }) => {
  const { store, setStore } = useContext(StoreContext)

  const clearError = () => {
    setStore({ ...store, error: null })
  }

  return (
    <Wrapper>
      <Header appName={'Иннопарсер'} />
      <Block>
        {store.fileText ? (
          <TextArea disabled value={store.fileText} />
        ) : (
          <StatusApp path={path} files={files} />
        )}
      </Block>
      {store.error && (
        <PopUpError
          title={store.error.title}
          text={store.error.text}
          clearError={clearError}
        />
      )}
    </Wrapper>
  )
}
