import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { ProductContext } from "../context/ProductContext";
import CartItem from "../components/CartItem";
import Checkout from "../components/Checkout";
import styles from "./Cart.module.css";

function Cart() {
  const { cartItems, getTotalCartCount } = useContext(ShopContext);
  const { products } = useContext(ProductContext);
  const totalCount = getTotalCartCount();
  return (
    <div>
      {totalCount ? (
        <div className="row">
          <div className="col-9">
            {products.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem key={product.id} data={product} />;
              }
            })}
          </div>
          <div className="col-3">
            <Checkout />
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.imgBox}>
            <img src="../../assets/imgs/empty_product.svg" alt="" />
          </div>
          <p className={styles.text}>لا توجد منتجات </p>
        </div>
      )}
    </div>
  );
}

export default Cart;
