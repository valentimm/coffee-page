import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { ProductsContainer } from "./styles";

import expresso from "../../assets/Expresso.png";
import americano from "../../assets/Americano.png";
import cremoso from "../../assets/ExpressoCremoso.png";
import gelado from "../../assets/CafeGelado.png";
import leite from "../../assets/CafeLeite.png";
import latte from "../../assets/Latte.png";
import cappuccino from "../../assets/Capuccino.png";
import macchiato from "../../assets/Macchiato.png";
import mocaccino from "../../assets/Mocaccino.png";
import chocolatequente from "../../assets/ChocolateQuente.png";
import cubano from "../../assets/Cubano.png";
import havaiano from "../../assets/Havaiano.png";
import irlandes from "../../assets/Irlandes.png";
import arabe from "../../assets/Arabe.png";

export interface ProductsType {
  quantity: number;
  id: number;
  name: string;
  tag: string;
  tag2: string;
  tag3: string;
  description: string;
  price: number;
  image: string;
}

export function Products() {
  const initialProducts: ProductsType[] = [
    {
      id: 1,
      name: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      tag: "Tradicional",
      tag2: "",
      tag3: "",
      price: 9.9,
      image: expresso,
      quantity: 0,
    },
    {
      id: 2,
      name: "Expresso Americano",
      description: "Expresso diluído, menos intenso que o tradicional",
      tag: "Tradicional",
      tag2: "",
      tag3: "",
      price: 10.5,
      image: americano,
      quantity: 0,
    },
    {
      id: 3,
      name: "Expresso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      tag: "Tradicional",
      tag2: "",
      tag3: "",
      price: 10.5,
      image: cremoso,
      quantity: 0,
    },
    {
      id: 4,
      name: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
      tag: "Gelado",
      tag2: "Tradicional",
      tag3: "",
      price: 12.5,
      image: gelado,
      quantity: 0,
    },
    {
      id: 5,
      name: "Café com Leite",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      tag: "Tradicional",
      tag2: "Com Leite",
      tag3: "",
      price: 12.5,
      image: leite,
      quantity: 0,
    },
    {
      id: 6,
      name: "Latte",
      description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      tag: "Tradicional",
      tag2: "Com Leite",
      tag3: "",
      price: 12.5,
      image: latte,
      quantity: 0,
    },
    {
      id: 7,
      name: "Capuccino",
      description: "Bebida com canela feita de doses iguais de café, leite e espuma",
      tag: "Tradicional",
      tag2: "Com Leite",
      tag3: "",
      price: 12.5,
      image: cappuccino,
      quantity: 0,
    },
    {
      id: 8,
      name: "Macchiato",
      description: "Café expresso misturado com um pouco de leite quente e espuma",
      tag: "Tradicional",
      tag2: "Com Leite",
      tag3: "",
      price: 12.5,
      image: macchiato,
      quantity: 0,
    },
    {
      id: 9,
      name: "Mocaccino",
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
      tag: "Tradicional",
      tag2: "Com Leite",
      tag3: "",
      price: 12.5,
      image: mocaccino,
      quantity: 0,
    },
    {
      id: 10,
      name: "Chocolate Quente",
      description: "Bebida feita com chocolate dissolvido no leite quente e café",
      tag: "Especial",
      tag2: "Com Leite",
      tag3: "",
      price: 12.5,
      image: chocolatequente,
      quantity: 0,
    },
    {
      id: 11,
      name: "Cubano",
      description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
      tag: "Especial",
      tag2: "Com Leite",
      tag3: "Gelado",
      price: 12.5,
      image: cubano,
      quantity: 0,
    },
    {
      id: 12,
      name: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
      tag: "Especial",
      tag2: "",
      tag3: "",
      price: 12.5,
      image: havaiano,
      quantity: 0,
    },
    {
      id: 13,
      name: "Árabe",
      description: "Bebida preparada com grãos de café árabe e especiarias",
      tag: "Especial",
      tag2: "",
      tag3: "",
      price: 12.5,
      image: arabe,
      quantity: 0,
    },
    {
      id: 14,
      name: "Irlandês",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      tag: "Especial",
      tag2: "Alcoólico",
      tag3: "",
      price: 12.5,
      image: irlandes,
      quantity: 0,
    },
  ];
  const [products, setProducts] = useState<ProductsType[]>(initialProducts);

  function handleAddProduct(id: number) {
    setProducts((prevProducts) => {
      return prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: product.quantity + 1 } : product
      );
    });
  }

  function handleRemoveProduct(id: number) {
    setProducts((prevProducts) => {
      return prevProducts.map((product) =>
        product.id === id ? { ...product, quantity: Math.max(product.quantity - 1, 0) } : product
      );
    });
  }

  return (
      <ProductsContainer>
        <div className="products">
          <h1>Nossos cafés</h1>
          <div className="productsList">
            {products.map((product) => (
              <div className="product" key={product.id}>
                <img src={product.image} alt={product.name} />
                <div id="tags">
                  <a>{product.tag}</a>
                  {product.tag2 && <a>{product.tag2}</a>}
                  {product.tag3 && <a>{product.tag3}</a>}
                </div>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <div className="buy">
                  <h2>
                    R$ <strong>{product.price.toFixed(2)}</strong>
                  </h2>
                  <span onClick={() => handleRemoveProduct(product.id)}>
                    <Minus
                      size={16}
                      weight="fill"
                      color="#8047F8"
                      className="addRemove"
                    />
                  </span>
                  {product.quantity}
                  <span onClick={() => handleAddProduct(product.id)}>
                    <Plus
                      size={16}
                      weight="fill"
                      color="#8047F8"
                      className="addRemove"
                    />
                  </span>
                  <button>
                    <ShoppingCart size={24} weight="fill" color="#ffffff" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ProductsContainer>
  );
}
