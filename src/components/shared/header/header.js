import { Block, Head } from './header.styled'

export const Header = ({ appName }) => (
  <Block>
    <Head>{appName}</Head>
  </Block>
)
