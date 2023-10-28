import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import PropTypes from "prop-types";
import styles from "./CurrencyConverter.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { CurrencyContext } from "../context/CurrencyContext";

function CurrencyConverter({ handleshowCurrency }) {
  const { setProductPrice } = useContext(ProductContext);

  const {
    CURRENCIES,
    currency,
    handleCurrencySettings,
    handleNameSettings,
    handleSign,
  } = useContext(CurrencyContext);

  const handleCheckboxChange = (currencyChosen, factor, currencyName, sign) => {
    handleCurrencySettings(currencyChosen);
    setProductPrice(factor);
    handleNameSettings(currencyName);
    handleSign(sign);
    console.log(sign);
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
                      currencyItem.factor,
                      currencyItem.name,
                      currencyItem.signArabic
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
  onData: PropTypes.object.isRequired,
};

export default CurrencyConverter;
