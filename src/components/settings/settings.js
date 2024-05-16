import { useState } from 'react'
import { Setting } from './setting/setting'
import { Title, Wrapper } from './settings.styled'

export const Settings = () => {
  const [isUpdate, setIsUpdate] = useState(
    !!Number(localStorage.getItem('isUpdate')) || false
  )
  const [isAutostart, setIsAutostart] = useState(
    !!Number(localStorage.getItem('isAuto')) || false
  )

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
    </Wrapper>
  )
}
