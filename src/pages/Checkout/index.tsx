import { 
  FormContainer, 
  CheckoutContainer, 
  CEPInput, 
  AddressInput, 
  NumberInput, 
  ComplementInput, 
  UFInput, 
  NeighborInput, 
  CityInput, 
  PaymentContainer, 
  OrderInfoContainer} from './styles'


import { Bank, CreditCard, CurrencyDollar, MapPinLine,Money } from 'phosphor-react'
import { ProductInCart } from '../../components/ProductInCart'


export function Checkout() {
  return (
    <CheckoutContainer>
      <h1>Complete seu pedido</h1>
      <div id="locationInfo">
        <FormContainer>
          <label>
            <span>
              <MapPinLine id="pin" size={22}/>
              <h2>Endereço de Entrega</h2>   
            </span>
            <a>Informe o endereço onde deseja receber seu pedido</a>
          </label>
          <form>
            <CEPInput type="text" placeholder="CEP" />
            <AddressInput type="text" placeholder="Endereço" />
            <span>
              <NumberInput type="text" placeholder="Número" />
              <ComplementInput type="text" placeholder="Complemento" />
            </span>
            <span>
              <NeighborInput type="text" placeholder="Bairro" />
              <CityInput type="text" placeholder="Cidade" />
              <UFInput type="text" placeholder="UF" />
            </span>
          </form>
        </FormContainer>
      </div>
      <div id="paymentInfo">
        <PaymentContainer>
          <label>
              <span>
                <CurrencyDollar id="pay" size={22}/>
                <h2>Pagamento</h2>   
              </span>
              <a>O pagamento é feito na entrega. Escolha a forma que deseja pagar</a>
          </label>
          <span>
            <button>
              <CreditCard id="method" size={16}/>
              Cartão de Crédito
            </button>
            <button>
              <Money id="method" size={16}/>
              Cartão de Débito
            </button>
            <button>
              <Bank id="method" size={16}/>
              Dinheiro
            </button>
          </span>
        </PaymentContainer>
      </div>
      <OrderInfoContainer>
        <h1>Resumo do Pedido</h1>
          <ProductInCart />
      </OrderInfoContainer>
    </CheckoutContainer>
  )
}