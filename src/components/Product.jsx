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
    <div className="col-lg-3 col-md-4 col-sm-6 d-flex  justify-content-center">
      <Card className={styles.card} style={{ width: "18rem" }}>
        <Link className={styles.customLink} to={`/product-view/${props.id}`}>
          <div className={styles.cardImgBox}>
            <img src={props.img} alt="" />
          </div>
        </Link>
        <Card.Body className={styles.cardBody}>
          <Card.Title className={styles.name}>{props.name}</Card.Title>
          <p className={styles.price}>
            {props.price.toLocaleString("ar-EG")}
            <span>ر.س</span>
          </p>
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
        {props.new && <div className={styles.badge}>جديدنا</div>}
        {props.bestseller && <div className={styles.badge}>الاكثر مبيعا</div>}
        {props.backAgain && <div className={styles.badge}>عاد من جديد</div>}
        {props.offer && <div className={styles.badge}>عرض لفترة محدودة</div>}
        {!props.available && (
          <div className={styles.badgeNotAvailable}>نفدت الكمية</div>
        )}
        {!props.available && <div className={styles.overlay}></div>}
      </Card>
    </div>
  );
}
Product.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  available: PropTypes.bool.isRequired,
  bestseller: PropTypes.bool.isRequired,
  new: PropTypes.bool.isRequired,
  backAgain: PropTypes.bool.isRequired,
  offer: PropTypes.bool.isRequired,
};
export default Product;
