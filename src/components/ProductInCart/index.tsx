import { Minus, Plus, Trash } from "phosphor-react";

import product1 from '../../assets/Americano.png'
import { CartProduct } from "./styles";

export function ProductInCart (){
    return (
      <CartProduct>
        <div id="orderInfo">
          <span id="order">
            <img src={product1}/>
            <div id="orderDescription">
              <h2>Expresso Tradicional</h2>
              <a>R$ 9,90</a>
            </div>
              <span id="selector">
                <Minus className="increaseDecrease" size={16} weight="fill" color="#8047F8" />
                1
                <Plus className="increaseDecrease" size={16} weight="fill" color="#8047F8" />
              </span>
              <button id="delete">
                <Trash size={16} color="#8047F8" />
                Remover
              </button>
          </span>
        </div>
      </CartProduct>
    )
}