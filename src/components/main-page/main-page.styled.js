import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`
export const ToolsBlock = styled.div`
  box-sizing: border-box;
  width: 280px;
  min-width: 280px;
  background-color: ${colors.blue[100]};
  padding: 24px 16px;
`
