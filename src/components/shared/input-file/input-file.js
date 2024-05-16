import { Block, Btn, Input } from './input-file.styled'

export const InputFile = ({ onChange }) => {
  return (
    <Block>
      <Input
        type='file'
        id='file'
        webkitdirectory=''
        directory=''
        multiple='multiple'
        onChange={onChange}
      />
      <label for='file'>
        <Btn>
          <span>ВЫБРАТЬ</span>
        </Btn>
      </label>
    </Block>
  )
}
