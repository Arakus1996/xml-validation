import styled from 'styled-components'
import { colors } from '../../styles/colors'
import { ReactComponent as CloseSVG } from '../../images/close.svg'
import { ReactComponent as AttentionSVG } from '../../images/attention.svg'

export const Wrapper = styled.div`
  position: relative;
  width: 488px;
  height: 312px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-radius: 8px;
  background-color: ${colors.system.white};
  box-shadow: 0 1px 1px 0 #0000001a;
`
export const Modal = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
`
export const H2 = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${colors.text.deepDark};
`
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`
export const H4 = styled.h4`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.text.deepDark};
`
export const Text = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: ${colors.text.deepDark};
  line-height: 18px;
  padding-left: 36px;
`
export const Close = styled(CloseSVG)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`
export const Attention = styled(AttentionSVG)`
  width: 20px;
  height: 20px;
  color: ${colors.system.red};
`
export const Btn = styled.div`
  position: absolute;
  right: 18px;
  bottom: 24px;
`
