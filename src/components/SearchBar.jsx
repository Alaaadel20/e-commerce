import PropTypes from "prop-types";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useState } from "react";
import styles from "./SearchBar.module.css";
import { Link } from "react-router-dom";

// import { AiOutlineSearch } from "react-icons/ai";
function SearchBar(props) {
  const { products } = useContext(ProductContext);
  const [input, setInput] = useState("");
  const filteredProduct = products.filter((product) =>
    product.productName.includes(input)
  );
  console.log(filteredProduct);
  console.log(input);
  return (
    <div className={styles.searchContainer}>
      <div
        className={styles.SearchBarOverlay}
        onClick={props.handleShowSearchBar}
      ></div>
      <div className={styles.inputBox}>
        <input
          placeholder="ادخل كلمة البحث"
          className={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {/* <AiOutlineSearch className={styles.inputSearchIcon} /> */}
      </div>

      <div className={styles.productList}>
        {input &&
          filteredProduct.map((product) => (
            <div key={product.id} className={styles.searchProduct}>
              <Link
                key={product.id}
                className={styles.customLink}
                to={`/product-view/${product.id}`}
              >
                <div className={styles.searchProductImgBox}>
                  <img src={product.img} alt="" />
                </div>
                <div className={styles.searchProductContentBox}>
                  <p className={styles.productName}>{product.productName}</p>
                  <p className={styles.productPrice}>{product.price}</p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
SearchBar.propTypes = {
  handleShowSearchBar: PropTypes.object.isRequired,
};
export default SearchBar;
