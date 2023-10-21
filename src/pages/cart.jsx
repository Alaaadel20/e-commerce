import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import products from "../db/data";
import CartItem from "../components/CartItem";

function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  return (
    <>
      <div>
        {products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>
      <div>{totalAmount}</div>
    </>
  );
}

export default Cart;
