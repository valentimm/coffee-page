import { Container } from "./styles";
import banner from '../../assets/banner.png';
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Home (){
  return (
    <Container>
      <div className="main">
        <div className="text">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
          <div className="icons">
            <span>
                <ShoppingCart className="Cart" size={24} weight="fill" />
              <a>Compra simples e segura</a>
            </span>
            <span>
              <Package size={24} weight="fill" />
              <a>Embalagem mantém o café intacto</a>
            </span>
            <span>
              <Timer size={24} weight="fill" />
              <a>Entrega rápida e rastreada</a>
            </span>
            <span>
              <Coffee size={24} weight="fill" />
              <a>O café chega fresquinho até você</a>
            </span>
          </div>
          
        </div>
        <img src={banner} />
      </div>
    </Container>
  )
}