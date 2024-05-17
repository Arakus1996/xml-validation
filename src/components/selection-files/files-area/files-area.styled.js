import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const Wrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  height: 100%;
  width: 236px;
  /* margin-top: 20px;
  margin-bottom: 20px; */

  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 20px;
    background-color: #d0d3d7;
  }
`
export const Block = styled.div`
  width: 248px;
  background-color: ${colors.system.white};
  border: 1px solid ${colors.blue[50]};
  border-radius: 10px;
  height: 400px;
  min-height: 200px;
  padding-top: 20px;
  padding-bottom: 20px;
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
  display: flex;
  margin: 0 16px;
  flex-direction: column;
  gap: 18px;
`
export const Li = styled.li`
  cursor: pointer;
  &:hover {
    background-color: ${colors.blue[220]};
  }
`
