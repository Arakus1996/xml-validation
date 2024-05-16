import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 0 8px;
  font-size: 14px;
  font-weight: 400;
  color: ${colors.text.default};
`
export const Title = styled.h4`
  font-weight: 700;
  font-size: 14px;
  color: ${colors.text.default};
`
export const P = styled.p`
  display: flex;
  justify-content: start;
`
export const Path = styled.span`
  text-overflow: clip;
  overflow: hidden;
  white-space: nowrap;
`
export const Directory = styled.span`
  text-align: right;
  direction: rtl;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`
