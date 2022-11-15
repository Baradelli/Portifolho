import { Avatar, Container } from './styles'

export const Profile = () => {
  return (
    <Container>
      <Avatar src="https://avatars.githubusercontent.com/u/94546015?v=4" />
      <div className="title">Vitor Tognetti Baradelli</div>
      <div className="description">Fullstack developer</div>
    </Container>
  )
}
