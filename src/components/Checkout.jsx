import styles from "./Checkout.module.css";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
function Checkout() {
  const { getTotalCartAmount, getTotalCartCount, resetCart } =
    useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const totalCount = getTotalCartCount();
  const navigate = useNavigate();

  const handleOrder = () => {
    toast.success("تم تأكيد الطلب بنجاح  ", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      onClose: () => {
        setTimeout(() => {
          navigate("/"); // Navigate to the homepage after a delay
        }, 3000);
        resetCart();
      },
    });
  };
  return (
    <div className={styles.checkoutBox}>
      <p className={styles.summary}>ملخص الطلب </p>
      <div className={styles.totalProducts}>
        <p className={styles.total}>مجموع المنتجات </p>
        <p className={styles.totalNumber}>
          {totalCount.toLocaleString("ar-EG")}
        </p>
      </div>
      <div className={styles.codeInput}>
        <label> هل لديك كود خصم</label>
        <div className={styles.inputContainer}>
          <input placeholder="ادخل كود الخصم" required />
          <button className={styles.addCode}>اضافة</button>
        </div>
      </div>
      <div className={styles.totalPrice}>
        <p className={styles.total}>الاجمالي</p>
        <p className={styles.totalNumber}>
          {totalAmount.toLocaleString("ar-EG")}
        </p>
      </div>
      <p>* الاسعار شاملة الضريبة</p>
      <button className={styles.confirmOrder} onClick={handleOrder}>
        اتمام الطلب
      </button>
      <ToastContainer className={styles.alert} />
    </div>
  );
}

export default Checkout;
