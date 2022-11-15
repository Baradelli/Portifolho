import { Education } from './Components/Education'
import { Experiences } from './Components/Experiences'
import { Links } from './Components/Links'
import { Profile } from './Components/Profile'
import { Projects } from './Components/Projects'
import { Technologies } from './Components/Technologies'
import { Card, Container } from './styles'

export const Home = () => {
  return (
    <Container>
      <div className="column-1">
        <Card>
          <Profile />
        </Card>
        <Card>
          <Links />
        </Card>
        <Card>
          <Technologies />
        </Card>
        <Card>
          <Experiences />
        </Card>
        <Card>
          <Education />
        </Card>
      </div>
      <div className="column-2">
        <Card>
          <div className="title">My projects</div>
        </Card>
        <Projects />
      </div>
    </Container>
  )
}
