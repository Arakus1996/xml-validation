import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
`
export const Text = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: ${colors.text.default};
  text-align: center;
`
