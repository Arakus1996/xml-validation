import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  height: 100%;
`

export const Title = styled.h2`
  font-weight: 500;
  font-size: 21px;
  color: ${colors.text.default};
`
