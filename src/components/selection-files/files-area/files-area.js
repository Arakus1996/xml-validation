import { Block, Helper, Li, Ul, Wrapper } from './files-area.styled'
import { FileItem } from './file-item/file-item'

export const FilesArea = ({ files, fullPath, handleDelete, handleOpenDir }) => {
  return (
    <Block>
      <Wrapper>
        {files.length ? (
          <Ul>
            {files.map((item, index) => (
              <Li key={index}>
                <FileItem
                  file={item.name}
                  key={index}
                  fullPath={fullPath}
                  fileName={item.name}
                  handleDelete={handleDelete}
                  handleOpenDir={handleOpenDir}
                />
              </Li>
            ))}
          </Ul>
        ) : (
          <Helper>Файлы для обработки не найдены</Helper>
        )}
      </Wrapper>
    </Block>
  )
}
