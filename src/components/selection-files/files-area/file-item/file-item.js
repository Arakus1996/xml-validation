import { useRef, useState } from 'react'
import { ActionMenu } from './action-menu/action-menu'
import { Icon, Span, Wrapper } from './file-item.styled'
import { useClickOutside } from '../../../../hooks/use-click-outside'

export const FileItem = ({
  file,
  fullPath,
  fileName,
  handleDelete,
  handleOpenDir,
}) => {
  const menuRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  useClickOutside(menuRef, () => {
    setIsOpen(false)
  })

  return (
    <Wrapper ref={menuRef} onClick={() => setIsOpen(true)}>
      <Icon />
      <Span>{file}</Span>
      {isOpen && (
        <ActionMenu
          fullPath={fullPath}
          fileName={fileName}
          handleDelete={handleDelete}
          handleOpenDir={handleOpenDir}
          setIsOpen={setIsOpen}
        />
      )}
    </Wrapper>
  )
}
