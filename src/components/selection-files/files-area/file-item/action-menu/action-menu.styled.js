import styled from 'styled-components'
import { colors } from '../../../../../styles/colors'

export const Wrapper = styled.div`
  position: absolute;
  right: 0;
  top: 26px;
  z-index: 2;
  padding: 6px 4px;
  border-radius: 4px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  background-color: ${colors.system.white};
`
export const Li = styled.li`
  padding: 8px 12px;
  &:hover {
    background-color: ${colors.blue[220]};
    border-radius: 2px;
  }
`
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
`
export const Btn = styled.button`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.text.dark};
  background-color: rgba(255, 255, 255, 0);
  border: none;
  height: 24px;
  cursor: pointer;
`
