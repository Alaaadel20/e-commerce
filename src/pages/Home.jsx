import styles from "./Home.module.css";
import Product from "../components/Product";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

// import products from "../db/data";
function Home() {
  const { products } = useContext(ProductContext);
  return (
    <div>
      <div className={styles.heroImg}>
        <img src="../../assets/imgs/1.webp" alt="" />
      </div>
      <div className={styles.customerImg}>
        <a href="">
          <img src="../../assets/imgs/2.webp" alt="" />
        </a>
      </div>
      <h2 className={styles.headingSecond}>جديدنا والأكثر مبيعًا</h2>
      <div className="row">
        {products
          .filter((item) => item.bestseller === true || item.id === 18)
          .map((item) => (
            <Product
              id={item.id}
              key={item.id}
              name={item.productName}
              img={item.img}
              price={item.price}
              available={item.available}
              new={item.new}
              backAgain={item.backAgain}
              offer={item.offer}
            />
          ))}
      </div>
      <div className={styles.perfumeImg}>
        <img src="../../assets/imgs/3.webp" alt="" />
      </div>
      <h2 className={styles.headingSecond}>صنع بحب..</h2>
      <div className="row  ">
        {products.map((item) => (
          <Product
            id={item.id}
            key={item.id}
            name={item.productName}
            price={item.price}
            img={item.img}
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

export default Home;
