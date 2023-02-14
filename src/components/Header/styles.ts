import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.5rem;
  margin: 2rem 10rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  .pin{
    background-color: ${props => props.theme['purple-light']};
    padding: 0.5rem;
    border-radius: 0.5rem;
    gap: 0.25rem;
    color: ${props => props.theme['purple']};
  }
  .cart:hover{
    background-color: ${props => props.theme['yellow']};
    cursor: pointer;
  }
  .cart {
    color: ${props => props.theme['yellow-dark']};
    background-color: ${props => props.theme['yellow-light']};
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size: 1.5rem;

  }
  a{
    color: ${props => props.theme['purple-dark']};
    font-size: 14px;
  }
`

