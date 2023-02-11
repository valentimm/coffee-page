import { FormContainer, MainContainer, MinutesAmountInput, TaskInput } from './styles'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { MapPinLine } from 'phosphor-react'


export function Checkout() {
  return (
    <MainContainer>
      <h1>Checkout</h1>
      <FormContainer>
        <label>
          <MapPinLine id="pin" size={22}/>
          <h2>Endereço de Entrega</h2>
          <a>Informe o endereço onde deseja receber seu pedido</a>
        </label>

      </FormContainer>

    </MainContainer>
  )
}