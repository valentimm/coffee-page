import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { ProductsContainer } from "./styles";

import expresso from "../../assets/Expresso.png";

export interface ProductsType {
  quantity: number;
  id: number;
  name: string;
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
      price: 9.9,
      image: expresso,
      quantity: 0,
    },
    {
      id: 1,
      name: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
      image: expresso,
      quantity: 0,
    },
    // Add other products here
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
        product.id === id ? { ...product, quantity: product.quantity - 1 } : product
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
                  <a>TRADICIONAL</a>
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
