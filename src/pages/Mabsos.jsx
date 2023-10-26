import Product from "../components/Product";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import styles from "./Mabsos.module.css";
function Mabsos() {
  const { products } = useContext(ProductContext);
  const [selectedList, setSelectedList] = useState(products);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    if (selectedOption === "0") {
      setSelectedList(products);
    } else if (selectedOption === "1") {
      setSelectedList(
        products.filter((product) => product.bestseller === true)
      );
    } else if (selectedOption === "2") {
      setSelectedList(products.filter((product) => product.rating === 5));
      console.log(products);
    } else if (selectedOption === "3") {
      const newArr = [...products];

      newArr.sort((a, b) => b.price - a.price);
      setSelectedList(newArr);
      console.log(
        products
          .filter((item) => item.category === "adhan")
          .sort((a, b) => b.price - a.price)
      );
    } else if (selectedOption === "4") {
      const newArr = [...products];
      newArr.sort((a, b) => a.price - b.price);
      setSelectedList(newArr);
      console.log(
        products
          .filter((item) => item.category === "adhan")
          .sort((a, b) => a.price - b.price)
      );
    }
  }, [selectedOption, products]);
  return (
    <div>
      <div className={styles.filter}>
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="0">مقترحاتنا</option>
          <option value="1">الاكثر مبيعا</option>
          <option value="2">الاعلي تقييما</option>
          <option value="3">السعر من الاعلي الي الاقل</option>
          <option value="4">السعر من الاقل الي الاعلي</option>
        </select>
      </div>
      <div className="row  ">
        {selectedList
          .filter((item) => item.category === "mabsos")
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

export default Mabsos;
