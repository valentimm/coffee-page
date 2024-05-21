import styled from 'styled-components'

export const ModalStyle = styled.div`
  display: flex;
  align-items: center;

  border: 1px solid red;
#order{
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  display: flex;
  padding-bottom: 1rem;
}
img {
    display: none;
    width: 4rem;
    height: 4rem;
  }
  h2{
    display: flex;
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }
a {
    padding-top: 0.5rem;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-text']};
    display: flex;
    align-items: center;
  }

#selector {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  width: 4.5rem;
  height: 2rem;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
}
button {
  width: 5.6875rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  padding: 0.5rem;
  border: none;
  background-color: ${(props) => props.theme['base-button']};
  font-size: 0.75rem;
  font-weight: 400;
}
button:hover {
    background-color: ${(props) => props.theme['base-hover']};
    cursor: pointer;
}
.increaseDecrease:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme['base-hover']};
    border-radius: 9999px;
}
`