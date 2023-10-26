// import products from "../db/data";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";
import { LiaWalletSolid } from "react-icons/lia";
import { BsBag } from "react-icons/bs";
import DescriptionAndPrefiewTabs from "./DescriptionAndReviewTabs";
import { ShopContext } from "../context/ShopContext";
import styles from "./ProductView.module.css";
import Slider from "./Slider";
function ProductView() {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  console.log(id);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgBox}>
          <img src={products[id - 1].img} />
        </div>
        <div className={styles.contentBox}>
          <span>السعر شامل الضريبة</span>
          <h2 className={styles.name}> {products[id - 1].productName}</h2>
          <h3 className={styles.price}>{products[id - 1].price}</h3>
          <del className={styles.priceBeforeSale}>
            {products[id - 1].priceBeforeSale}
          </del>

          {products[id - 1].available ? (
            <p className={styles.available}>
              <span>
                <AiOutlineCheckCircle className={styles.checkIcon} />
              </span>
              متوفر
            </p>
          ) : (
            <p className={styles.soldout}>
              <span>
                <AiOutlineCloseCircle className={styles.closeIcon} />
              </span>
              نفدت الكمية
            </p>
          )}
          <div className={styles.countControlBox}>
            <div className={styles.amount}> الكمية</div>
            <div className={styles.countControl}>
              <button className={styles.btn} onClick={() => addToCart(id)}>
                <IoMdAdd className={styles.cartItemIcon} />
              </button>
              <input
                className={styles.cartItemInput}
                value={cartItems[id].toLocaleString("ar-EG")}
                onChange={(e) =>
                  updateCartItemCount(Number(e.target.value), id)
                }
              />

              <button className={styles.btn} onClick={() => removeFromCart(id)}>
                <IoMdRemove className={styles.cartItemIcon} />
              </button>
            </div>
          </div>
          {!products[id - 1].available ? (
            <button className={styles.availableBtn}>اعلمني عند التوفر</button>
          ) : (
            <div className={styles.buyActions}>
              <button className={styles.addToCartBtn}>
                <BsBag /> اضافة للسلة
              </button>
              <button className={styles.buyNowBtn}>
                <LiaWalletSolid className={styles.solidIcon} />
                اشتري الان
              </button>
            </div>
          )}
        </div>
      </div>
      <DescriptionAndPrefiewTabs />
      <Slider />
    </>
  );
}

export default ProductView;
