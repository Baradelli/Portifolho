import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  .techs {
    background-color: #cb92b1;
    color: #000;
    text-align: center;

    /* font-size: 14px; */
    padding: 3px 5px;
    border-radius: 30px;
  }
`
