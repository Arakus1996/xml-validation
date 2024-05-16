import styled from 'styled-components'
import { ReactComponent as CheckSVG } from '../../../images/check.svg'
import { colors } from '../../../styles/colors'

export const Wrapper = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  & input {
    width: 100%;
    height: 100%;
    margin: 0;
    position: absolute;
    z-index: 2;
    opacity: 0;
  }
`

export const CheckIcon = styled(CheckSVG)`
  color: ${colors.blue[200]};
`
export const Box = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
  border-radius: 2px;
  background-color: ${colors.system.white};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 1px 0 #0000001a;
`
