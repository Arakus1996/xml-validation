import styled from 'styled-components'
import { colors } from '../../styles/colors'
import { ReactComponent as ReloadSVG } from '../../images/reload.svg'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100%;
  width: 100%;
`
export const Title = styled.h2`
  font-weight: 500;
  font-size: 21px;
  color: ${colors.text.default};
`
export const Head = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Refresh = styled(ReloadSVG)`
  fill: ${colors.blue[200]};
  cursor: pointer;
  width: 25px;
  height: 25px;
`
