import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4.875rem 10rem;
  gap: 2rem;
  background-color: ${(props) => props.theme['yellow-dark']};
 h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: ${(props) => props.theme['purple-dark']};
 }
 div {
  width: 40rem;
  height: 23.25rem;
  display: flex;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
 }
 label {
  display: flex;
  vertical-align: baseline;
 }
 a {
  color: ${(props) => props.theme['purple-dark']};
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
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['yellow']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['yellow-dark']};
  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['purple']};
  }
  &::placeholder {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`
