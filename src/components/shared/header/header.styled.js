import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const Block = styled.div`
  width: 100%;
  background-color: ${colors.blue.default};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
`
export const Head = styled.h1`
  font-weight: 500;
  font-size: 16px;
  color: ${colors.text.light};
`
