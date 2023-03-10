import { createContext, useState } from "react";
import { ProductsType } from "../components/Products";

interface ProductsContextData {
  products: ProductsType;
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