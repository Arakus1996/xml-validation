import { PopUpButton } from '../shared/pop-up-button/pop-up-button'
import {
  Attention,
  Body,
  Btn,
  Close,
  H2,
  H4,
  Head,
  Modal,
  Text,
  Title,
  Wrapper,
} from './pop-up.styled'

export const PopUpError = ({ title, text, helper, clearError }) => {
  return (
    <Modal>
      <Wrapper>
        <Head>
          <H2>Ошибка</H2>
          <Close onClick={() => clearError('')} />
        </Head>
        <Body>
          <Title>
            <Attention />
            <H4>{title}</H4>
          </Title>
          <Text>{text}</Text>
          <Text>{helper}</Text>
        </Body>
        <Btn>
          <PopUpButton onClick={() => clearError('')} />
        </Btn>
      </Wrapper>
    </Modal>
  )
}
