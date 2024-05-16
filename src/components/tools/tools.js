import { SelectionFiles } from '../selection-files/selection-files'
import { Settings } from '../settings/settings'
import { Wrapper } from './tools.styled'

export const Tools = ({ currentControl, files, setFiles, path, setPath }) => {
  if (currentControl === 'files') {
    return (
      <SelectionFiles
        files={files}
        setFiles={setFiles}
        path={path}
        setPath={setPath}
      />
    )
  }
  if (currentControl === 'settings') {
    return <Settings />
  }
}
