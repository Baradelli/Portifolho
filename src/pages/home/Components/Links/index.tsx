import { Container, Box } from './styles'

import mapPin from '../../../../../public/assets/map-pin.svg'
import briefcase from '../../../../../public/assets/briefcase.svg'
import github from '../../../../../public/assets/github.svg'
import linkedin from '../../../../../public/assets/linkedin.svg'
import twitter from '../../../../../public/assets/twitter.svg'
import globe from '../../../../../public/assets/globe.svg'
import mail from '../../../../../public/assets/mail.svg'

export const Links = () => {
  return (
    <Container>
      <Box>
        <img src={mapPin} alt="mapPin" />
        <span>Brasil</span>
      </Box>
      <Box>
        <img src={briefcase} alt="mapPin" />
        <a href="https://maxscalla.com.br" target="_blank">
          Maxscalla
        </a>
      </Box>
      <Box>
        <img src={github} alt="mapPin" />
        <a href="https://github.com/Baradelli" target="_blank">
          Baradelli
        </a>
      </Box>
      <Box>
        <img src={linkedin} alt="mapPin" />
        <a
          href="https://www.linkedin.com/in/vitor-baradelli-b112b1254/"
          target="_blank"
        >
          Vitor Baradelli
        </a>
      </Box>
      <Box>
        <img src={twitter} alt="mapPin" />
        <span>------</span>
      </Box>
      <Box>
        <img src={globe} alt="mapPin" />
        <span>------</span>
      </Box>
      <Box>
        <img src={mail} alt="mapPin" />
        <a href="mailto:vitorbaradelli@gmail.com">vitorbaradelli@gmail.com</a>
      </Box>
    </Container>
  )
}
