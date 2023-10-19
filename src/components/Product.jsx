import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import styles from "./Product.module.css";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
function Product(props) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 d-flex g-3 justify-content-center">
      <Card className={styles.card} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body className={styles.cardBody}>
          <Card.Title className={styles.name}>{props.name}</Card.Title>
          <p className={styles.price}>{props.priceA}</p>
          <div className={styles.action}>
            <button className={styles.actionBtn}>
              <AiOutlineHeart />
            </button>
            <button className={styles.actionBtn}>
              <AiOutlineEye />
            </button>
            <button className={styles.actionBtn}>
              <FiShoppingBag />
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
Product.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  priceA: PropTypes.string.isRequired,
};
export default Product;
