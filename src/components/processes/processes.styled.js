import styled from 'styled-components'
import { colors } from '../../styles/colors'
import { ReactComponent as AttentionSVG } from '../../images/attention.svg'
import { ReactComponent as SuccessSVG } from '../../images/success.svg'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`
export const Block = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.system.main};
`
export const ReadyIcon = styled(AttentionSVG)`
  color: ${colors.gray[400]};
  width: 40px;
  height: 40px;
`
export const SuccessIcon = styled(SuccessSVG)`
  color: ${colors.system.green};
  width: 40px;
  height: 40px;
`
export const ErrorIcon = styled(AttentionSVG)`
  width: 40px;
  height: 40px;
  color: ${colors.system.red};
`

export const TextArea = styled.textarea`
  resize: none;
  width: 90%;
  height: 75%;
`
