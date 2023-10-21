import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
function CartItem(props) {
  const { id, productName, img, price } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div>
      <div>
        <img src={img} alt="" />
        <p>{productName}</p>
        <p>{id}</p>
        <div>total:{price * cartItems[id]}</div>
      </div>
      <div>
        <button onClick={() => removeFromCart(id)}>-</button>
        <input
          value={cartItems[id]}
          onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
        />
        <button onClick={() => addToCart(id)}>+</button>
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
