import CurrencyConverter from "./CurrencyConverter";
import styles from "./UpperNav.module.css";
import { FaCoins } from "react-icons/fa";
import { AiOutlineDown, AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";

function UpperNav() {
  const [showCurrencies, setShowcurrencies] = useState(false);
  const { name } = useContext(CurrencyContext);
  const handleshowCurrency = (bool) => {
    setShowcurrencies(bool);
  };

  return (
    <>
      <div className={styles.container}>
        <ul className={styles.nav}>
          <li>
            <Link className={styles.customLink} to="/return">
              سياسة الاسترجاع والاستبدال والالغاء
            </Link>
          </li>
          <li>
            <Link className={styles.customLink} to="/purchase">
              خطوات الشراء
            </Link>
          </li>
          <li>
            <Link className={styles.customLink} to="/privacy">
              سياسة الخصوصية
            </Link>
          </li>
          <li>
            <button
              className={styles.currencyBtn}
              onClick={() => handleshowCurrency(true)}
            >
              <FaCoins className={styles.coinsIcon} />
              <span className={styles.currency}>{name} </span>
              <AiOutlineDown className={styles.downIcon} />
            </button>
          </li>
        </ul>
        <div className={styles.contact}>
          <div className={styles.phoneBox}>
            <a href="https://api.whatsapp.com/send?phone=966550551524">
              966550551524
            </a>
            <BsTelephone className={styles.phoneIcon} />
          </div>
          <div className={styles.mailBox}>
            <a href="mailto:example@example.com?subject=Hello&body=I%20wanted%20to%20reach%20out%20to%20you&X-MS-OL-EXTREF=https://outlook.live.com/">
              info@oudamoudi.com
            </a>
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
