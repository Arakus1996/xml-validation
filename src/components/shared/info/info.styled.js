import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`
export const Icon = styled.div`
  color: ${colors.gray[300]};
`
export const Text = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: ${colors.text.default};
`
