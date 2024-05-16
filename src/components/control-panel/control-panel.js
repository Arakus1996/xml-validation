import { Tab } from './tab/tab'
import { ReactComponent as DirectorySVG } from '../../images/directory.svg'
import { ReactComponent as ShapeSVG } from '../../images/shape.svg'
import { Panel } from './control-panel.styled'

export const ControlPanel = ({ currentControl, handleClick }) => {
  return (
    <Panel>
      <Tab
        onClick={() => handleClick('files')}
        isActive={currentControl === 'files'}
        Image={DirectorySVG}
      />
      <Tab
        onClick={() => handleClick('settings')}
        isActive={currentControl === 'settings'}
        Image={ShapeSVG}
      />
    </Panel>
  )
}
