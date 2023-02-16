import { ProductsContainer } from "./styles";
import { createContext, useState, useContext } from 'react';

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

import { Minus, Plus, ShoppingCart } from "phosphor-react";

interface ProductsContextData {
  products: number;
  handleAddProduct: () => void;
  handleRemoveProduct: () => void;
}

export const ProductsContext = createContext({} as ProductsContextData);

export function Products (){
const [products, setProducts] = useState(0);

function handleAddProduct(){
    setProducts((products) => {
      return products + 1;
    });
  }
function handleRemoveProduct(){
    setProducts((products) => {
      return products - 1;
    });
  }


  return (
    <ProductsContext.Provider value={{ products, handleAddProduct, handleRemoveProduct }}>
    <ProductsContainer>
        <div className="products">
        <h1>Nossos cafés</h1>
        <div className="productsList">
          <div className="product">
            <img src={expresso} />
            <div id="tags">
              <a>TRADICIONAL</a>
            </div>
            <h1>Expresso Tradicional</h1>
              <p>O tradicional café feito com água quente e grãos moídos</p>
            <div className="buy">
              <h2>R$ <strong>9,90</strong></h2>
                <span onClick={handleRemoveProduct}>
                  <Minus size={16} weight="fill" color="#8047F8" className="addRemove" />
                </span>
                  {products}
                <span onClick={handleAddProduct}  >
                  <Plus size={16} weight="fill" color="#8047F8" className="addRemove" />
                </span>
              <button>
                <ShoppingCart size={24} weight="fill" color="#ffffff" />
              </button>
            </div>
          </div>

        </div>
      </div>
  </ProductsContainer>
  </ ProductsContext.Provider>
  )
}