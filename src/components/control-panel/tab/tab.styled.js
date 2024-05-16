import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const TabBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  width: 60px;
  border-bottom: 1px solid ${colors.gray[100]};
  position: relative;
  cursor: pointer;
  ${({ $active }) =>
    $active
      ? `background-color: ${colors.blue.secondary};
        color: ${colors.system.white};
        `
      : `background-color: ${colors.blue.default};
        color: ${colors.gray[200]};
        `}
`
export const Rectangle = styled.div`
  position: absolute;
  left: 0;
  width: 3px;
  height: 100%;
  background-color: ${colors.blue[100]};
`
