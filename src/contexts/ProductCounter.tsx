import { createContext, useState } from "react";

interface ProductsContextData {
  products: number;
  handleAddProduct: () => void;
  handleRemoveProduct: () => void;
}

export const ProductsContext = createContext({} as ProductsContextData);

export function Products (){
const [products, setProducts] = useState(0);

function handleAddProduct(){
    setProducts((state) => {
      return state + 1;
    });
  }
function handleRemoveProduct(){
    setProducts((state) => {
      return state - 1;
    });
  }
}