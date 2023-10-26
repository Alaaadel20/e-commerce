import { createContext, useState } from "react";
import PropTypes from "prop-types";
import productsDb from "../db/data";
export const ProductContext = createContext(null);

function ProductContextProvider(props) {
  const clonedProducts = productsDb.map((product) => ({ ...product }));
  const [products, setProducts] = useState(clonedProducts);
  const setProductPrice = (factor) => {
    const updatedProducts = products.map((product, i) => {
      const price = productsDb[i].price;
      return {
        ...product,
        price: price * factor,
      };
    });
    setProducts(updatedProducts);
  };
  const contextValue = { products, setProductPrice };
  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
}
ProductContextProvider.propTypes = {
  children: PropTypes.node,
};
export default ProductContextProvider;
