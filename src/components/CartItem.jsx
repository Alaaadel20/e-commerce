import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import styles from "../components/CartItem.module.css";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
function CartItem(props) {
  const { id, productName, img, price } = props.data;
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    removeItemFromCartTotally,
  } = useContext(ShopContext);
  return (
    <div className={styles.CartItem}>
      <div className={styles.cartItemData}>
        <div className={styles.cartImgBox}>
          <img src={img} />
        </div>
        <div className={styles.cartItemDataNamePrice}>
          <p className={styles.name}>{productName}</p>
          <p className={styles.price}>{price.toLocaleString("ar-EG")}</p>
        </div>
      </div>
      <div className={styles.countControl}>
        <button className={styles.btn} onClick={() => addToCart(id)}>
          <IoMdAdd className={styles.cartItemIcon} />
        </button>
        <input
          className={styles.cartItemInput}
          value={cartItems[id].toLocaleString("ar-EG")}
          onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
        />

        <button className={styles.btn} onClick={() => removeFromCart(id)}>
          <IoMdRemove className={styles.cartItemIcon} />
        </button>
      </div>
      <div className={styles.cartItemTotal}>
        المجموع:{(price * cartItems[id]).toLocaleString("ar-EG")}
      </div>
      <div onClick={() => removeItemFromCartTotally(id)}>
        <AiOutlineClose className={styles.closeIcon} />
      </div>
    </div>
  );
}

CartItem.propTypes = {
  data: PropTypes.object.isRequired,
  productName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
export default CartItem;
