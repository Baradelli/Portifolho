import { Container } from './styles'

export const Technologies = () => {
  return (
    <>
      <div className="title" style={{ marginBottom: 20 }}>
        Tecnologias
      </div>
      <Container>
        <div className="techs">HTML</div>
        <div className="techs">CSS</div>
        <div className="techs">Javascript</div>
        <div className="techs">Typescript</div>
        <div className="techs">ReactJs</div>
        <div className="techs">ReactNative</div>
        <div className="techs">NodeJs</div>
      </Container>
    </>
  )
}
