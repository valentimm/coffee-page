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

import { Bank, CreditCard, CurrencyDollar, MapPinLine,Money } from 'phosphor-react';
import { ProductInCart } from '../../components/ProductInCart';
import { useForm } from 'react-hook-form';

export function Checkout() {

const { register } = useForm();
  return (
    <CheckoutContainer>
      <div id="costumerInfos">
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
            <CEPInput 
              id="cep"
              type="number" 
              placeholder="CEP"
              {...register("cep")}
                       
              />
            <AddressInput  
              id='address' 
              type="text"
              placeholder="Endereço" 
              {...register("address")}              
              />
            <span>
              <NumberInput  
                id="number"
                type="number"
                placeholder="Número" 
                {...register("number")}                
                />
              <ComplementInput
                id="complement"
                type="text"
                placeholder="Complemento" 
                {...register("complement")}              
                />
            </span>
            <span>
              <NeighborInput  
                id='neighbor'
                type="text"
                placeholder="Bairro" 
                {...register("neighbor")}               
                />
              <CityInput  
                id='city'
                type="text"
                placeholder="Cidade" 
                {...register("city")}                
                />
              <UFInput  
                id='uf'
                type="text"
                placeholder="UF" 
                {...register("uf")}                
                />
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
            <button >
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
      </div>
      <div id="orderInfos">
      <div id="cartContainer">
        <OrderInfoContainer>
          <h1>Resumo do Pedido</h1>
          <div id="orderInfo">
            <ProductInCart />
            <ProductInCart />
            <ProductInCart />
            
            <div id="total">
              <p>Total de itens</p>
              <p>R$ 19,80</p>
              <p>Entrega</p>
              <p>R$ 0,00</p>
              <strong>Total</strong>
              <strong>R$ 19,80</strong>
            </div>
            <button id="confirmOrder">CONFIRMAR PEDIDO</button>
          </div>  
        </OrderInfoContainer>
      </div>
      </div>
    </CheckoutContainer>
  )
}