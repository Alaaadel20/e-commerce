import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { ProductContext } from "../context/ProductContext";
import CartItem from "../components/CartItem";
import Checkout from "../components/Checkout";

function Cart() {
  const { cartItems } = useContext(ShopContext);
  const { products } = useContext(ProductContext);

  return (
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
  );
}

export default Cart;
