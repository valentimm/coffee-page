import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
}
input[type=number] { 
   -moz-appearance: textfield;
   appearance: textfield;

}

  body {
    background: ${props => props.theme['base-background']};
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
    line-height: 130%;
  }
  h1{
    font-family: 'Baloo 2', cursive;
    line-height: 130%;
    font-size: 3rem;
    color: ${props => props.theme['base-title']};
  }
  h2{
    font-family: 'Roboto', sans-serif;
    line-height: 130%;
    font-size: 1.25rem;
    color: ${props => props.theme['base-subtitle']};
    font-weight: 400;
  }
  a{
    line-height: 130%;
    text-decoration: none;
    color: ${props => props.theme['base-text']};
  }
`