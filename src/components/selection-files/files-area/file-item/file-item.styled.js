import styled from 'styled-components'
import { ReactComponent as DirectorySVG } from '../../../../images/directory.svg'
import { colors } from '../../../../styles/colors'

export const Wrapper = styled.div`
  position: relative;
  font-size: 14px;
  font-weight: 400;
  color: ${colors.text.dark};
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 6px;
`
export const Span = styled.span`
  overflow: hidden;
`
export const Icon = styled(DirectorySVG)`
  width: 12px;
  height: 14px;
  color: ${colors.gray[90]};
  flex-shrink: 0;
`
