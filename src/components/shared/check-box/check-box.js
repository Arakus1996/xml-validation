import { Box, CheckIcon, Wrapper } from './check-box.styled'

export const CheckBox = ({ isChecked, setIsChecked }) => (
  <Wrapper>
    <Box>{isChecked && <CheckIcon />}</Box>
    <input
      type='checkbox'
      onChange={() => {
        setIsChecked()
      }}
    />
  </Wrapper>
)
