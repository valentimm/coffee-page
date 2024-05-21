import { Minus, Plus, Trash } from "phosphor-react";

import product1 from '../../assets/Americano.png'
import { ModalStyle } from "./styles";

export function ModalProduct() {

    return (
        <ModalStyle>
            <div id="order">
              <span id="orderContainer">
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
        </ModalStyle>
    );
}