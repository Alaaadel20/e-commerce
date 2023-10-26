import styles from "./PurchaseSteps.module.css";

function PurchaseSteps() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading1}>خطوات الشراء</h2>
      <h5 className={styles.heading2}>شرح؛ خطوات الطلب</h5>
      <p className={styles.text}>
        تسّوق: بعد التسجيل في المتجر تتم عملية التسوق وذلك من خلال تجميع
        المنتجات المطلوبة الى سلة الشراء
      </p>
      <p className={styles.text}>
        دفــع: أثناء اكمال خطوات التسوق ستظهر لك بيانات الحسابات البنكية.
        المطلوب دفع المبالغ المطلوبة ومن ثم اتمام الطلب
      </p>
      <p className={styles.text}>
        شحن: سيتم شحن المنتج ليصل لعنوان منزلك المسجل لدينا في سجل العنوان الخاص
        بحسابك خلال 2-7 أيام عمل بعد عملية الدفع.
      </p>
    </div>
  );
}

export default PurchaseSteps;
