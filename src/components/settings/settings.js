import { useContext, useEffect, useState } from 'react'
import { Setting } from './setting/setting'
import { Title, Wrapper } from './settings.styled'
import { FilesArea } from '../files-area/files-area'
import { StoreContext } from '../main-page/main-page'

export const Settings = ({ path }) => {
  const fullPath = `${path}/logs`
  const { store, setStore } = useContext(StoreContext)

  const [isUpdate, setIsUpdate] = useState(
    !!Number(localStorage.getItem('isUpdate')) || false
  )
  const [isAutostart, setIsAutostart] = useState(
    !!Number(localStorage.getItem('isAuto')) || false
  )

  useEffect(() => {
    if (path) {
      const logs = window.electron.readDirectory(fullPath)
      setStore({ ...store, logs: logs })
    }
  }, [])

  const handleAutostart = () => {
    const value = isAutostart
    setIsAutostart(!value)
    localStorage.setItem('isAuto', Number(!value))
  }

  const handleUpdate = () => {
    const value = isUpdate
    setIsUpdate(!value)
    localStorage.setItem('isUpdate', Number(!value))
  }

  return (
    <Wrapper>
      <Title>Настройки</Title>
      <Setting
        title={'Настройки запуска'}
        text={'Запускать при старте ОС'}
        setIsChecked={handleAutostart}
        isChecked={isAutostart}
      />
      <Setting
        title={'Версия:'}
        text={'Проверять обновления'}
        isChecked={isUpdate}
        setIsChecked={handleUpdate}
      />
      <FilesArea size='s' files={store.logs} icon={false} fullPath={fullPath} />
    </Wrapper>
  )
}
