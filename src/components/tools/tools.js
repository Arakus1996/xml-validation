import { SelectionFiles } from '../selection-files/selection-files'
import { Settings } from '../settings/settings'

export const Tools = ({
  currentControl,
  files,
  setFiles,
  path,
  setPath,
  setFullPath,
  fullPath,
}) => {
  if (currentControl === 'files') {
    return (
      <SelectionFiles
        files={files}
        setFiles={setFiles}
        path={path}
        setPath={setPath}
        setFullPath={setFullPath}
        fullPath={fullPath}
      />
    )
  }
  if (currentControl === 'settings') {
    return <Settings path={path} />
  }
}
