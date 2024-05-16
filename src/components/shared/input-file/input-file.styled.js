import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const Block = styled.div`
  position: relative;
  width: 230px;
  height: 34px;
`
export const Input = styled.input`
  height: 100%;
  position: absolute;
  visibility: hidden;
`
export const Btn = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.blue[200]};
  color: ${colors.text.light};
  cursor: pointer;
  border: none;
  border-radius: 4px;
`
