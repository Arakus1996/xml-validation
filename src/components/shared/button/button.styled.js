import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const ButtonBlock = styled.button`
  width: 230px;
  height: 34px;
  background-color: ${colors.blue[200]};
  color: ${colors.text.light};
  cursor: pointer;
  border: none;
  border-radius: 4px;
  &:disabled {
    opacity: 0.55;
    cursor: auto;
  }
`
