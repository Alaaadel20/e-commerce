import { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import PropTypes from "prop-types";
import styles from "./CurrencyConverter.module.css";
import { AiOutlineClose } from "react-icons/ai";

const CURRENCIES = [
  { name: "درهم اماراتي", value: "uae", factor: 2, sign: "AED" },
  { name: "دينار بحريني", value: "bahrain", factor: 4, sign: "BHD" },
  { name: "ريال عماني", value: "oman", factor: 1, sign: "OMR" },
  { name: "ريال سعودي", value: "ksa", factor: 3, sign: "SAR" },
];
function CurrencyConverter({ handleshowCurrency }) {
  const { products, setProductPrice } = useContext(ProductContext);

  const [currency, setCurrency] = useState("ksa");
  console.log(products);
  const handleCheckboxChange = (currency, factor) => {
    setCurrency(currency);
    setProductPrice(factor);
  };

  return (
    <div>
      <div
        className={styles.overlay}
        onClick={() => handleshowCurrency(false)}
      ></div>
      <div className={styles.container}>
        <div className={styles.currencyBox}>
          <p className={styles.coins}>العملة</p>
          {CURRENCIES.map((currencyItem) => (
            <>
              <div className={styles.currency}>
                <input
                  className={styles.checkbox}
                  key={currencyItem.name}
                  type="checkbox"
                  id={currencyItem.value}
                  name={currencyItem.name}
                  checked={currency === currencyItem.value}
                  onChange={() =>
                    handleCheckboxChange(
                      currencyItem.value,
                      currencyItem.factor
                    )
                  }
                />
                <label htmlFor={currencyItem.value}>{currencyItem.name} </label>
                <p className={styles.currencySign}>{currencyItem.sign}</p>
              </div>
            </>
          ))}
          <button>
            <AiOutlineClose
              className={styles.closeIcon}
              onClick={() => handleshowCurrency(false)}
            />
          </button>
          <button
            className={styles.okBtn}
            onClick={() => handleshowCurrency(false)}
          >
            موافق
          </button>
        </div>
      </div>
    </div>
  );
}

CurrencyConverter.propTypes = {
  handleshowCurrency: PropTypes.object.isRequired,
  handleSelectCurrency: PropTypes.object.isRequired,
};

export default CurrencyConverter;
