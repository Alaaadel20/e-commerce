import CustomersReview from "./CustomersReview";
import styles from "./DescriptionAndReviewTabs.module.scss";
function DescriptionAndPrefiewTabs() {
  return (
    <div className={styles.container}>
      <h2 className={styles.review}>تقييمات المنتج</h2>
      <CustomersReview />
    </div>
  );
}

export default DescriptionAndPrefiewTabs;
