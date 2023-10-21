import CurrencyConverter from "./CurrencyConverter";
import styles from "./UpperNav.module.css";
function UpperNav() {
  return (
    <div>
      <ul className={styles.nav}>
        <li>سياسة الاسترجاع و الاستبدال والإلغاء</li>
        <li>خطوات الشراء</li>
        <li>سياسة الخصوصية</li>
        <li>
          <CurrencyConverter />
        </li>
      </ul>
    </div>
  );
}

export default UpperNav;
