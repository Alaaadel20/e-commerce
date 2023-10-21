import Product from "../components/Product";
import products from "../db/data";
import { useState, useEffect } from "react";

function Adhan() {
  const [selectedList, setSelectedList] = useState(products);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    if (selectedOption === "مقترحاتنا") {
      setSelectedList(products);
    } else if (selectedOption === "الاكثر مبيعا") {
      setSelectedList(
        products.filter((product) => product.bestseller === true)
      );
    } else if (selectedOption === "الاعلي تقييما") {
      setSelectedList(products.filter((product) => product.rating === 5));
    } else if (selectedOption === "السعر من الاقل الي الاعلي") {
      setSelectedList(products.sort((a, b) => b.price - a.price));
    } else if (selectedOption === "السعر من الاعلي الي الاقل") {
      setSelectedList(products.sort((a, b) => a.price - b.price));
    }
  }, [selectedOption]);

  return (
    <div>
      <div>
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="مقترحاتنا">مقترحاتنا</option>
          <option value="الاكثر مبيعا">الاكثر مبيعا</option>
          <option value="الاعلي تقييما">الاعلي تقييما</option>
          <option value="السعر من الاعلي الي الاقل">
            السعر من الاعلي الي الاقل
          </option>
          <option value="السعر من الاقل الي الاعلي ">
            السعر من الاقل الي الاعلي
          </option>
        </select>
      </div>
      <div className="row">
        {selectedList
          .filter((item) => item.category === "adhan")
          .map((item) => (
            <Product
              key={item.id}
              id={item.id}
              name={item.productName}
              img={item.img}
              priceA={item.price}
            />
          ))}
      </div>
    </div>
  );
}

export default Adhan;
