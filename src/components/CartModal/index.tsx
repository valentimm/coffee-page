import { ProductInCart } from '../ProductInCart'
import { CartModalContainer } from './styles'

export function CartModal() {
  return(
    <CartModalContainer>
      <div>
        <h1>Carrinho</h1>
      </div>

      <button id="goToCart">Finalizar compra</button>
    </CartModalContainer>
  )
}