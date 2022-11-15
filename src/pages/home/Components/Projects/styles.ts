import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 2.1875rem;
`

export const LinkCard = styled.a`
  all: unset;

  background-color: #302f3d;
  border-radius: 20px;

  padding: 1.875rem;

  display: flex;
  flex-direction: column;

  .title {
    font-weight: 700;
    font-size: 1.5rem;
  }

  .description {
    font-weight: 200;
    font-size: 0.875rem;
  }

  cursor: pointer;
`
export const Box = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  gap: 1.25rem;
`
