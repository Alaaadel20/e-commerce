import CurrencyConverter from "./CurrencyConverter";
import styles from "./UpperNav.module.css";
import { FaCoins } from "react-icons/fa";
import { AiOutlineDown, AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { useState } from "react";
function UpperNav() {
  const [showCurrencies, setShowcurrencies] = useState(false);
  const handleshowCurrency = (bool) => {
    setShowcurrencies(bool);
  };

  return (
    <>
      <div className={styles.container}>
        <ul className={styles.nav}>
          <li>سياسة الاسترجاع و الاستبدال والإلغاء</li>
          <li>خطوات الشراء</li>
          <li>سياسة الخصوصية</li>
          <li>
            <button
              className={styles.currencyBtn}
              onClick={() => handleshowCurrency(true)}
            >
              <FaCoins className={styles.coinsIcon} />
              <span className={styles.currency}>ريال سعودي </span>
              <AiOutlineDown className={styles.downIcon} />
            </button>
          </li>
        </ul>
        <div className={styles.contact}>
          <div className={styles.phoneBox}>
            <span>966550551524</span>
            <BsTelephone className={styles.phoneIcon} />
          </div>
          <div className={styles.mailBox}>
            <span>info@oudamoudi.com</span>
            <AiOutlineMail className={styles.mailIcon} />
          </div>
        </div>
      </div>
      <div>
        {showCurrencies && (
          <CurrencyConverter
            className={styles.currencyBox}
            handleshowCurrency={handleshowCurrency}
          />
        )}
      </div>
    </>
  );
}

export default UpperNav;
