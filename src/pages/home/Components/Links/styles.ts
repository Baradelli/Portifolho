import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;
`

export const Box = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  gap: 1.25rem;

  a {
    all: unset;

    cursor: pointer;
  }
`
