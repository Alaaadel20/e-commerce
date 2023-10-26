import Product from "../components/Product";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function Maba5er() {
  const { products } = useContext(ProductContext);
  return (
    <div>
      <div className="row  ">
        {products
          .filter((item) => item.category === "maba5er")
          .map((item) => (
            <Product
              key={item.id}
              id={item.id}
              name={item.productName}
              img={item.img}
              price={item.price}
              available={item.available}
              bestseller={item.bestseller}
              new={item.new}
              backAgain={item.backAgain}
              offer={item.offer}
            />
          ))}
      </div>
    </div>
  );
}

export default Maba5er;
