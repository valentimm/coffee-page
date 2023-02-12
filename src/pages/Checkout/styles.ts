import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4.875rem 10rem;
  gap: 2rem;
 h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
 }
 div {
  width: 40rem;
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
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0.5rem 0.5rem;
  border-radius: 0.25rem;
  color: ${(props) => props.theme['base-text']};
  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['yellow-dark']};
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
  padding: 4.875rem 10rem;
  gap: 2rem;
  
  div {
    height: 13rem;
    border-radius: 9999px;
  }
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
    padding: 0.5rem 1rem;
    gap: 0.5rem;
    background-color: ${(props) => props.theme['base-button']};
    border: 0;
    color: ${(props) => props.theme['base-subtitle']};
    ::hover {
      background-color: ${(props) => props.theme['purple-dark']};
    }
  }
  #method {
    display: flex;
    color: ${(props) => props.theme['purple']};
  }
`