import { useContext, useState } from 'react'
import { Header } from '../shared/header/header'
import { Preloader } from '../shared/preloader/preloader'
import {
  Block,
  ErrorIcon,
  ReadyIcon,
  StatusIcon,
  SuccessIcon,
  Wrapper,
} from './processes.styled'
import { Status } from './status/status'
import { StoreContext } from '../main-page/main-page'
import { PopUpError } from '../pop-up/pop-up'

const StatusApp = ({ path, files }) => {
  const { store } = useContext(StoreContext)
  console.log(files)

  // сделать ограничение по файлам чтобы попадали xml

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

export const Processes = ({ path, files, error, clearError }) => {
  return (
    <Wrapper>
      <Header appName={'Название приложения'} />
      <Block>
        <StatusApp path={path} files={files} />
      </Block>
      {error && <PopUpError clearError={clearError} />}
    </Wrapper>
  )
}
