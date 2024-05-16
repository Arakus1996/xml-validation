import { createContext, useMemo, useState } from 'react'
import { ControlPanel } from '../control-panel/control-panel'
import { Processes } from '../processes/processes'
import { ToolsBlock, Wrapper } from './main-page.styled'
import { Tools } from '../tools/tools'

export const StoreContext = createContext({})

export const MainPage = () => {
  const [store, setStore] = useState({
    isLoading: false,
    status: null,
    error: null,
  })
  const value = useMemo(() => ({ store, setStore }), [store])

  const [files, setFiles] = useState([])
  const [path, setPath] = useState('')
  const [fullPath, setFullPath] = useState('')
  console.log(fullPath)

  const [currentControl, setCurrentControl] = useState('files')
  const handleControl = control => {
    setCurrentControl(control)
  }

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
            setFullPath={setFullPath}
            fullPath={fullPath}
          />
        </ToolsBlock>
        <Processes path={path} files={files} />
      </Wrapper>
    </StoreContext.Provider>
  )
}
