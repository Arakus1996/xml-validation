import { Helper, Li, Ul, Wrapper } from './files-area.styled'
import { FileItem } from './file-item/file-item'

export const FilesArea = ({ files, handleDelete }) => {
  return (
    <Wrapper>
      {files.length ? (
        <Ul>
          {files.map((item, index) => (
            <Li key={index}>
              <FileItem
                file={item.name}
                key={index}
                handleDelete={handleDelete}
                fileName={item.name}
              />
            </Li>
          ))}
        </Ul>
      ) : (
        <Helper>Файлы для обработки не найдены</Helper>
      )}
    </Wrapper>
  )
}
