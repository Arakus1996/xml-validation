import styled from 'styled-components'
import { colors } from '../../../styles/colors'

// TODO: подумать про скрол
export const Wrapper = styled.div`
  position: relative;
  height: 445px;
  min-height: 240px;
  width: 100%;
  background-color: ${colors.system.white};
  border: 1px solid ${colors.blue[50]};
  border-radius: 10px;
`
export const Helper = styled.p`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 125px;
  font-weight: 400;
  font-size: 12px;
  color: ${colors.text.gray};
  text-align: center;
`

export const Ul = styled.ul`
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`
export const Li = styled.li`
  cursor: pointer;
  &:hover {
    background-color: ${colors.blue[220]};
  }
`
