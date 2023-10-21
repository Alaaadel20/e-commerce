import { createContext, useState } from "react";
import PropTypes from "prop-types";
import productsDb from "../db/data";
export const ProductContext = createContext(null);

function ProductContextProvider(props) {
  const [products, setProducts] = useState([...productsDb]);
  const setProductPrice = (factor) => {
    products.forEach((product, i) => {
      const price = productsDb[i].price;

      product.price = price * factor;
    });
    setProducts(products);
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
