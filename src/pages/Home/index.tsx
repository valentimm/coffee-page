import { Container } from "./styles";

import banner from '../../assets/banner.png';

import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { Products } from "../../components/Products";

export function Home (){
  return (
    <Container>
      <div className="main">
        <div className="text">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
          <div className="icons">
            <span>
              <div id="cart">
                <ShoppingCart size={16} weight="fill" />
              </div>
              <a>Compra simples e segura</a>
            </span>
            <span>
              <div id="package">
                <Package size={16} weight="fill" />
              </div>
              <a>Embalagem mantém o café intacto</a>
            </span>
            <span>
              <div id="timer">
                <Timer size={16} weight="fill" />
              </div>
              <a>Entrega rápida e rastreada</a>
            </span>
            <span>
              <div id="coffee">
                <Coffee size={16} weight="fill" />
              </div>
              <a>O café chega fresquinho até você</a>
            </span>
          </div>
          
        </div>
        <img src={banner} />
      </div>
      <Products />
    </Container>
  )
}