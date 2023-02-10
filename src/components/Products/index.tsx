import { ProductsContainer } from "./styles";

import americano from '../../assets/Americano.png';
import árabe from '../../assets/Árabe.png';
import comLeite from '../../assets/Café com Leite.png'; 
import gelado from '../../assets/Café Gelado.png';
import capuccino from '../../assets/Capuccino.png';
import chocolateQuente from '../../assets/Chocolate Quente.png';
import cubano from '../../assets/Cubano.png';
import cremoso from '../../assets/Expresso Cremoso.png';
import expresso from '../../assets/Expresso.png';
import havaiano  from '../../assets/Havaiano.png';
import irlandês from '../../assets/Irlandês.png';
import latte from '../../assets/Latte.png';
import macchiato from '../../assets/Macchiato.png';
import mocha from '../../assets/Mochaccino.png';

import { Coffee, Minus, Package, Plus, ShoppingCart, Timer } from "phosphor-react";

export function Products (){
  return (
  <ProductsContainer>
    
  <div className="products">
        <h1>Nossos cafés</h1>
        <div className="productsList">
          <div className="product">
            <img src={expresso} />
              <a>TRADICIONAL</a>
            <h1>Expresso Tradicional</h1>
              <p>O tradicional café feito com água quente e grãos moídos</p>
            <div className="buy">
              <h2>R$ <strong>9,90</strong></h2>
                <span>
                  <Minus size={16} weight="fill" color="#8047F8" />
                  1
                  <Plus size={16} weight="fill" color="#8047F8" />
                </span>
              <button>
                <ShoppingCart size={24} weight="fill" color="#ffffff" />
              </button>
            </div>
          </div>
          <div className="product">
            <img src={americano} />
              <a>TRADICIONAL</a>
            <h1>Expresso Cremoso</h1>
              <p>Expresso diluído, menos intenso que o tradicional</p>
            <div className="buy">
              <h2>R$ <strong>9,90</strong></h2>
                <span>
                  <Minus size={16} weight="fill" color="#8047F8" />
                  1
                  <Plus size={16} weight="fill" color="#8047F8" />
                </span>
              <button>
                <ShoppingCart size={24} weight="fill" color="#ffffff" />
              </button>
            </div>
          </div>
          <div className="product">
            <img src={cremoso} />
              <a>TRADICIONAL</a>
            <h1>Expresso Cremoso</h1>
              <p>Café expresso tradicional com espuma cremosa</p>
            <div className="buy">
              <h2>R$ <strong>9,90</strong></h2>
                <span>
                  <Minus size={16} weight="fill" color="#8047F8" />
                  1
                  <Plus size={16} weight="fill" color="#8047F8" />
                </span>
              <button>
                <ShoppingCart size={24} weight="fill" color="#ffffff" />
              </button>
            </div>
          </div>
          <div className="product">
            <img src={gelado} />
              <a>TRADICIONAL</a>
              <a>GELADO</a>
            <h1>Expresso Gelado</h1>
              <p>Bebida preparada com café expresso e cubos de gelo</p>
            <div className="buy">
              <h2>R$ <strong>9,90</strong></h2>
                <span>
                  <Minus size={16} weight="fill" color="#8047F8" />
                  1
                  <Plus size={16} weight="fill" color="#8047F8" />
                </span>
              <button>
                <ShoppingCart size={24} weight="fill" color="#ffffff" />
              </button>
            </div>
          </div>
          <div className="product">
            <img src={comLeite} />
              <a>TRADICIONAL</a>
              <a>COM LEITE</a>
            <h1>Café com Leite</h1>
              <p>Meio a meio de expresso tradicional com leite vaporizado</p>
            <div className="buy">
              <h2>R$ <strong>9,90</strong></h2>
                <span>
                  <Minus size={16} weight="fill" color="#8047F8" />
                  1
                  <Plus size={16} weight="fill" color="#8047F8" />
                </span>
              <button>
                <ShoppingCart size={24} weight="fill" color="#ffffff" />
              </button>
            </div>
          </div>
          <div className="product">
            <img src={latte} />
              <a>TRADICIONAL</a>
              <a>COM LEITE</a>
            <h1>Latte</h1>
              <p>Uma dose de café expresso com o dobro de leite e espuma cremosa</p>
            <div className="buy">
              <h2>R$ <strong>9,90</strong></h2>
                <span>
                  <Minus size={16} weight="fill" color="#8047F8" />
                  1
                  <Plus size={16} weight="fill" color="#8047F8" />
                </span>
              <button>
                <ShoppingCart size={24} weight="fill" color="#ffffff" />
              </button>
            </div>
          </div>
          <div className="product">
            <img src={capuccino} />
              <a>TRADICIONAL</a>
              <a>COM LEITE</a>
            <h1>Capuccino</h1>
              <p>Bebida com canela feita de doses iguais de café, leite e espuma</p>
            <div className="buy">
              <h2>R$ <strong>9,90</strong></h2>
                <span>
                  <Minus size={16} weight="fill" color="#8047F8" />
                  1
                  <Plus size={16} weight="fill" color="#8047F8" />
                </span>
              <button>
                <ShoppingCart size={24} weight="fill" color="#ffffff" />
              </button>
            </div>
          </div>
          <div className="product">
            <img src={macchiato} />
              <a>TRADICIONAL</a>
              <a>COM LEITE</a>
            <h1>Macchiato</h1>
              <p>Café expresso misturado com um pouco de leite quente e espuma</p>
            <div className="buy">
              <h2>R$ <strong>9,90</strong></h2>
                <span>
                  <Minus size={16} weight="fill" color="#8047F8" />
                  1
                  <Plus size={16} weight="fill" color="#8047F8" />
                </span>
              <button>
                <ShoppingCart size={24} weight="fill" color="#ffffff" />
              </button>
            </div>
          </div>
          <div className="product">
            <img src={mocha} />
              <a>TRADICIONAL</a>
              <a>COM LEITE</a>
            <h1>Mocaccino</h1>
              <p>Café expresso com calda de chocolate, pouco leite e espuma</p>
            <div className="buy">
              <h2>R$ <strong>9,90</strong></h2>
                <span>
                  <Minus size={16} weight="fill" color="#8047F8" />
                  1
                  <Plus size={16} weight="fill" color="#8047F8" />
                </span>
              <button>
                <ShoppingCart size={24} weight="fill" color="#ffffff" />
              </button>
            </div>
          </div>
          <div className="product">
            <img src={chocolateQuente} />
              <a>ESPECIAL</a>
              <a>COM LEITE</a>
            <h1>Chocolate Quente</h1>
              <p>Bebida feita com chocolate dissolvido no leite quente e café</p>
            <div className="buy">
              <h2>R$ <strong>9,90</strong></h2>
                <span>
                  <Minus size={16} weight="fill" color="#8047F8" />
                  1
                  <Plus size={16} weight="fill" color="#8047F8" />
                </span>
              <button>
                <ShoppingCart size={24} weight="fill" color="#ffffff" />
              </button>
            </div>
          </div>
          <div className="product">
            <img src={cubano} />
              <a>ESPECIAL</a>
              <a>ALCOÓLICO</a>
              <a>GELADO</a>
            <h1>Cubano</h1>
              <p>Drink gelado de café expresso com rum, creme de leite e hortelã</p>
            <div className="buy">
              <h2>R$ <strong>9,90</strong></h2>
                <span>
                  <Minus size={16} weight="fill" color="#8047F8" />
                  1
                  <Plus size={16} weight="fill" color="#8047F8" />
                </span>
              <button>
                <ShoppingCart size={24} weight="fill" color="#ffffff" />
              </button>
            </div>
          </div>
          <div className="product">
            <img src={havaiano} />
              <a>ESPECIAL</a>
            <h1>Havaiano</h1>
              <p>Bebida adocicada preparada com café e leite de coco</p>
            <div className="buy">
              <h2>R$ <strong>9,90</strong></h2>
                <span>
                  <Minus size={16} weight="fill" color="#8047F8" />
                  1
                  <Plus size={16} weight="fill" color="#8047F8" />
                </span>
              <button>
                <ShoppingCart size={24} weight="fill" color="#ffffff" />
              </button>
            </div>
          </div>
          <div className="product">
            <img src={árabe} />
              <a>ESPECIAL</a>
            <h1>Árabe</h1>
              <p>Bebida preparada com grãos de café árabe e especiarias</p>
            <div className="buy">
              <h2>R$ <strong>9,90</strong></h2>
                <span>
                  <Minus size={16} weight="fill" color="#8047F8" />
                  1
                  <Plus size={16} weight="fill" color="#8047F8" />
                </span>
              <button>
                <ShoppingCart size={24} weight="fill" color="#ffffff" />
              </button>
            </div>
          </div>
          <div className="product">
            <img src={irlandês} />
              <a>ESPECIAL</a>
              <a>ALCOÓLICO</a>
            <h1>Irlandês</h1>
              <p>Bebida a base de café, uísque irlandês, açúcar e chantilly</p>
            <div className="buy">
              <h2>R$ <strong>9,90</strong></h2>
                <span>
                  <Minus size={16} weight="fill" color="#8047F8" />
                  1
                  <Plus size={16} weight="fill" color="#8047F8" />
                </span>
              <button>
                <ShoppingCart size={24} weight="fill" color="#ffffff" />
              </button>
            </div>
          </div>
        </div>
      </div>
  </ProductsContainer>
  )
}