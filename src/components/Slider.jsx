import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "../components/Product";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import styles from "./Slider.module.css";

function Slider() {
  const { products } = useContext(ProductContext);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <h2 className={styles.heading}>منتجات قد تعجبك </h2>
      <Carousel
        autoPlay={true}
        autoPlaySpeed={2500}
        responsive={responsive}
        itemClass="carousel-item-padding-10-px"
        containerClass="carousel-container"
        className={styles.mmm}
      >
        {products.map((item) => (
          <Product
            className={styles.product}
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
      </Carousel>
      ;
    </div>
  );
}

export default Slider;
