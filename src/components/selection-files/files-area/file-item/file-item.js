import { useRef, useState } from 'react'
import { ActionMenu } from './action-menu/action-menu'
import { Icon, Span, Wrapper } from './file-item.styled'
import { useClickOutside } from '../../../../hooks/use-click-outside'

export const FileItem = ({ file, handleDelete, fileName }) => {
  const menuRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  useClickOutside(menuRef, () => {
    setIsOpen(false)
  })

  return (
    <Wrapper ref={menuRef} onClick={() => setIsOpen(true)}>
      <Icon />
      <Span>{file}</Span>
      {isOpen && <ActionMenu handleDelete={handleDelete} fileName={fileName} />}
    </Wrapper>
  )
}
