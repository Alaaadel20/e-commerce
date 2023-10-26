import styles from "./CustomersReview.module.css";

function CustomersReview() {
  return (
    <div>
      <div className={styles.customerReviewContainer}>
        <div className={styles.customerImgBox}>
          <img src="../../assets/imgs/avatar_male.webp" alt="" />
        </div>
        <div className={styles.customerReviewBox}>
          <div>
            <h4 className={styles.customerName}>عبدالله محمد</h4>
            <p className={styles.customerReview}>
              السلام عليكم اتمنى تسون بكج جبار تقريبا فيه اغلط العطور مثلا ودي
              اشتري هذا البكج ( توباكو + كولينان + ذكرى ) وفي نفس الوقت ابغي بكج
              غزلان والمشكله بكون عطر كولينال مكرر اتمنى تخلون اكثر من بكج منوع
            </p>
          </div>
          <div className={styles.time}>منذ شهرين </div>
        </div>
      </div>
      <div className={styles.customerReviewContainer}>
        <div className={styles.customerImgBox}>
          <img src="../../assets/imgs/avatar_male.webp" alt="" />
        </div>
        <div className={styles.customerReviewBox}>
          <div>
            <h4 className={styles.customerName}>سالم المبسلي </h4>
            <p className={styles.customerReview}>
              جميل جدا جدا ورائحة وثبات ولا اروع
            </p>
          </div>
          <div className={styles.time}>منذ شهر </div>
        </div>
      </div>
      <div className={styles.customerReviewContainer}>
        <div className={styles.customerImgBox}>
          <img src="../../assets/imgs/avatar_male.webp" alt="" />
        </div>
        <div className={styles.customerReviewBox}>
          <div>
            <h4 className={styles.customerName}> عبدالله صولان</h4>
            <p className={styles.customerReview}>
              بكل صراحة وامانة مجرب هذة العطور عن تجربة اجتني هدية من جمال
              الرائحة والله دخلت وسجلت حسابي وطلبتة مرة ثانية شكر لكم على جهودكم
              الكبيرة واللخلاص في العمل وامانة
            </p>
          </div>
          <div className={styles.time}>منذ شهرين </div>
        </div>
      </div>
    </div>
  );
}

export default CustomersReview;
