import { createContext, useMemo, useState } from 'react'
import { ControlPanel } from '../control-panel/control-panel'
import { Processes } from '../processes/processes'
import { SelectionFiles } from '../selection-files/selection-files'
import { ToolsBlock, Wrapper } from './main-page.styled'
import { Settings } from '../settings/settings'
import { PopUpError } from '../pop-up/pop-up'
import { Tools } from '../tools/tools'

export const StoreContext = createContext({})

// TODO: сделать попап попапом
export const MainPage = () => {
  const [store, setStore] = useState({
    isLoading: false,
  })
  const value = useMemo(() => ({ store, setStore }), [store])

  const [files, setFiles] = useState([])
  const [path, setPath] = useState('')

  const [currentControl, setCurrentControl] = useState('files')
  const handleControl = control => {
    setCurrentControl(control)
  }

  const [error, clearError] = useState('err')

  return (
    <StoreContext.Provider value={value}>
      <Wrapper>
        <ControlPanel
          currentControl={currentControl}
          handleClick={handleControl}
        />
        <ToolsBlock>
          <Tools
            currentControl={currentControl}
            files={files}
            setFiles={setFiles}
            path={path}
            setPath={setPath}
          />
        </ToolsBlock>
        <Processes
          path={path}
          files={files}
          error={error}
          clearError={clearError}
        />
      </Wrapper>
    </StoreContext.Provider>
  )
}
