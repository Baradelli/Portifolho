import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 100%;

  gap: 3.75rem;

  .column-1 {
    flex: 1;
    gap: 1.875rem;

    display: flex;
    flex-direction: column;
  }

  .column-2 {
    flex: 4;

    gap: 1.875rem;

    display: flex;
    flex-direction: column;
  }
`

export const Card = styled.div`
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
`
