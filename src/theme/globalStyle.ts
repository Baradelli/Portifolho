import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body  {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #root {
    flex: 1;
    display: flex;
    flex-direction: column;

    font-family: 'Merriweather Sans', sans-serif;
  }

  .max-main {
    display: flex;
    flex: 1 0 auto;
  }

  .max-container {
    flex: 1;
    overflow-x: hidden;

    padding: 2.5rem;
    max-width: 100vw;
    height: calc(100vh - 5rem);

    background-color: #22212C;
    color: #837E9F;
  }

    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    &::-webkit-scrollbar-track {
      border-radius: 10px;
      background: rgba(255,255,255,0.3);
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: rgba(255,255,255,0.5);
    }
    &::-webkit-scrollbar-thumb:hover {
      background: rgba(255,255,255,0.6);
    }
    &::-webkit-scrollbar-thumb:active {
      background: rgba(255, 255, 255, 0.8);
    }

    img {
      width: 24px;
      height: 24px;
    }
`
