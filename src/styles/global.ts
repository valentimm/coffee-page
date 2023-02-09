import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme['base-background']};
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
  }
  h1{
    font-family: 'Baloo 2', cursive;
    line-height: 130%;
    font-size: 3rem;
    color: ${props => props.theme['base-title']};
  }
`