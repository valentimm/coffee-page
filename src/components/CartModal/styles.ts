import styled from "styled-components";

export const CartModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme['purple-light']};
  width: 22rem;
  height: 11rem;
  border-radius: 6px 36px;
  padding: 1rem;
h1{
  font-size: 2rem;
  padding-bottom: 1rem;
}
 #goToCart {
  color: ${(props) => props.theme['white']};
  background-color: ${(props) => props.theme['yellow']};
  border: 0;
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  border-radius: 6px;
  width: 100%;
  height: 1.875rem;
 }
 #goToCart:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
