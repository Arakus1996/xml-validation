import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 230px;
  border-bottom: 1px solid #abb0b6;
  padding-bottom: 32px;
`

export const Title = styled.h4`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.text.default};
`
export const SettingBlock = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`
export const Text = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.text.default};
`
