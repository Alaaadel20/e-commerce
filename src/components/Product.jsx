import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import styles from "./Product.module.css";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
function Product(props) {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 d-flex g-1 justify-content-center">
      <Card className={styles.card} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body className={styles.cardBody}>
          <Card.Title className={styles.name}>{props.name}</Card.Title>
          <p className={styles.price}>{props.price}</p>
          <div className={styles.action}>
            <button className={styles.actionBtn}>
              <AiOutlineHeart className={styles.cardIcon} />
            </button>
            <button className={styles.actionBtn}>
              <Link to={`/product-view/${props.id}`}>
                <AiOutlineEye className={styles.cardIcon} />
              </Link>
            </button>
            <button
              className={styles.actionBtn}
              onClick={() => addToCart(props.id)}
            >
              <BsBag className={styles.cardIcon} />
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
Product.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
export default Product;
