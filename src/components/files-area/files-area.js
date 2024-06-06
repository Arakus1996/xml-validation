import { Block, Helper, Li, Ul, Wrapper } from './files-area.styled'
import { FileItem } from './file-item/file-item'

export const FilesArea = ({
  files,
  fullPath,
  handleDelete,
  handleOpenDir,
  helper,
  size,
}) => {
  return (
    <Block $size={size}>
      <Wrapper>
        {files?.length ? (
          <Ul>
            {files.map((item, index) => (
              <Li key={index}>
                <FileItem
                  file={item}
                  key={index}
                  fullPath={fullPath}
                  fileName={item}
                  handleDelete={handleDelete}
                  handleOpenDir={handleOpenDir}
                />
              </Li>
            ))}
          </Ul>
        ) : (
          <Helper>{helper}</Helper>
        )}
      </Wrapper>
    </Block>
  )
}
