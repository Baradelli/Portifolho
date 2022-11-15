import { useEffect, useState } from 'react'
import { Box, Container, LinkCard } from './styles'

import folder from '../../../../../public/assets/folder.svg'

export const Projects = () => {
  const [projects, setProjects] = useState([])

  const getProjectsApiGitHub = () => {
    fetch('https://api.github.com/users/baradelli/repos')
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(String(res.status))
        }

        const data = await res.json()
        setProjects(data)

        console.log(projects)
      })
      .catch((e) => console.log(e))
  }

  useEffect(() => {
    getProjectsApiGitHub()
  }, [])

  return (
    <Container>
      {projects.map((repo) => (
        <LinkCard href={repo.html_url} target="_blank">
          <Box>
            <img src={folder} alt="folder" />
            <span>{repo.name}</span>
          </Box>
        </LinkCard>
      ))}
    </Container>
  )
}
