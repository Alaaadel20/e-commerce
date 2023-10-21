import { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function CurrencyConverter() {
  const { products, setProductPrice } = useContext(ProductContext);
  const [currencies, setCurrencies] = useState({
    uae: false,
    bahrain: false,
    oman: false,
    ksa: true,
  });
  console.log(products);
  const handleCheckboxChange = (currency, factor) => {
    for (const item in currencies) {
      currencies[item] = currency === item;
    }
    console.log(currencies);
    setCurrencies({ ...currencies });
    setProductPrice(factor);
  };

  // const handleCheckboxChangeUae = () => {
  //   setCurrencies({
  //     bahrain: false,
  //     oman: false,
  //     ksa: false,
  //     uae: !currencies.uae,
  //   });
  // console.log(e.target.checked);

  //   setProductPrice(3);
  // };

  return (
    <div>
      <input
        type="checkbox"
        id="درهم"
        name="درهم اماراتي"
        checked={currencies.uae}
        onChange={() => handleCheckboxChange("uae", 3)}
      />
      <label htmlFor="درهم">درهم اماراتي </label>
      <input
        type="checkbox"
        id="دينار بحريني"
        name="دينار بحريني"
        checked={currencies.bahrain}
        onChange={() => handleCheckboxChange("bahrain", 2)}
      />
      <label htmlFor="دينار بحريني">دينار بحريني </label>
      <input
        type="checkbox"
        id=" ريال عماني"
        name="ريال عماني"
        checked={currencies.oman}
        onChange={() => handleCheckboxChange("oman", 4)}
      />
      <label htmlFor="ريال عماني">ريال عماني </label>
      <input
        type="checkbox"
        id="ريال سعودي"
        name="ريال سعودي"
        checked={currencies.ksa}
        onChange={() => handleCheckboxChange("ksa", 1)}
      />
      <label htmlFor="ريال سعودي">ريال سعودي </label>
    </div>
  );
}

export default CurrencyConverter;
