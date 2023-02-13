import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem 10rem;
  
 h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
    padding-bottom: 2rem;
 }
  #locationInfo {
  width:40rem;
  height: 23.25rem;
  border-radius: 6px;
  display: block;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
 }
 label {
  display: block;
  position: relative;
  flex: 1;
 }
 span {
  display: flex;
  gap: 0.5rem;
 }
 a {
  display: block;
  color: ${(props) => props.theme['base-text']};
  font-size: 0.875rem;
  font-weight: 400;
 }
 form {
  display: grid;
  padding-top: 1rem;
  grid-row-gap: 1rem;
 }
 #pin{
  color: ${(props) => props.theme['yellow-dark']};
 }
`
export const FormContainer = styled.div`
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`
const BaseInput = styled.input`

  background: ${(props) => props.theme['base-input']};
  height: 2.625rem;
  border: 0;
  font-weight: 400;
  font-size: 0.875rem;
  padding: 0.5rem 0.5rem;
  border-radius: 0.25rem;
  color: ${(props) => props.theme['base-text']};
  -webkit-appearance: none;
&:focus {
    box-shadow: none;
    outline: 1px solid ${(props) => props.theme['yellow-dark']};
  }
  &::placeholder {
    color: ${(props) => props.theme['base-label']};
    font-weight: 400;
    font-size: 0.875rem;
  }

`
export const CEPInput = styled(BaseInput)`
  width: 12.5rem;
  display: flex;
  align-items: center;
`
export const AddressInput = styled(BaseInput)`
  flex: 1;
  display: flex;
  align-items: center;
  width: 100%;
`
export const NumberInput = styled(BaseInput)`
  width: 12.5rem;
  display: inline-block;
  align-items: center;
`
export const ComplementInput = styled(BaseInput)`
  width: 21.75rem;
  display: inline-block;
  align-items: center;
`
export const NeighborInput = styled(BaseInput)`
  width: 12.5rem;
  display: inline-block;
  align-items: center;
`
export const CityInput = styled(BaseInput)`
  width: 17.25rem;
  display: inline-block;
  align-items: center;
`
export const UFInput = styled(BaseInput)`
  width: 3.75rem;
  display: inline-block;
  align-items: center;
`

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['base-card']};
  width: 40rem;
  height: 13rem;
  border-radius: 6px;
  gap: 2rem;
  padding: 2.5rem;
  margin-top: 2rem;
  #pay{
    color: ${(props) => props.theme['purple-dark']};
  }
  label{
    padding-bottom: 1rem;
  }
  button {
    width: 11.125rem;
    height: 3.1875rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 6px;
    padding: 1rem 1rem;
    gap: 0.5rem;
    background-color: ${(props) => props.theme['base-button']};
    border: 0;
    color: ${(props) => props.theme['base-subtitle']};
  }
    button:hover {
      background-color: ${(props) => props.theme['base-hover']};
    }
    button:active {
      background-color: ${(props) => props.theme['purple-light']};
      outline: 1px solid ${(props) => props.theme['purple']};
    }
  #method {
    display: flex;
    color: ${(props) => props.theme['purple']};
  }
`
export const OrderInfoContainer = styled.div` 
display: flex;
flex-direction: column;

  #orderInfo {
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme['base-card']};
    width: 28rem;
    min-height: 31rem;
    border-radius: 6px 36px;
    padding: 2.5rem;
    gap: 1.5rem;
    }
 
  #total {
    width: 23rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem 10rem;

    p {
      font-size: 0.875rem;
      font-weight: 400;
      color: ${(props) => props.theme['base-text']};
    }
    strong {
      font-size: 1.25rem;
      font-weight: 700;
    }
  }
  #confirmOrder {
    width: 23rem;
    height: 2.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    color: ${(props) => props.theme['white']};
    background-color: ${(props) => props.theme['yellow']};
    border: 0;
    font-size: 0.875rem;
    font-weight: 700;
    cursor: pointer;
  }
  #confirmOrder:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`