import { ReactNode, createContext, useReducer } from "react";
import { IProduct } from "../interfaces/IProduct";
import ProductsReducer from "../reducer/ProductsReducer";

interface Props {
  children: ReactNode;
}

export const ProductContext = createContext(
  {} as {
    products: IProduct[];
    dispatch: any;
  }
);

const ProductProvider = (props: Props) => {
  const [products,dispatch]=useReducer(ProductsReducer,[] as IProduct[])
  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
