import styles from "./Footer.module.css";
import {
  AiOutlineMail,
  AiOutlineYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsTelephone, BsSnapchat } from "react-icons/bs";
import { CiMobile4, CiTwitter } from "react-icons/ci";
import { PiTiktokLogoLight } from "react-icons/pi";

function Footer() {
  return (
    <div>
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 store-footer__curve z-[0]"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill=" #f3f4f6"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        ></path>
      </svg>
      <div className={styles.footerContent}>
        <div>
          <h3 className={styles.footerHeading2}>روابط مهمة</h3>
          <a href="" className={styles.footerLink}>
            سياسة الاسترجاع و الاستبدال والإلغاء
          </a>
          <a href="" className={styles.footerLink}>
            خطوات الشراء
          </a>
          <a href="" className={styles.footerLink}>
            سياسة الخصوصية
          </a>
          <a href="" className={styles.footerLink}>
            مركز عناية عملاء العمودي للعود
          </a>
          <a href="" className={styles.footerLink}>
            سياسة الخصومات والأكواد والعروض
          </a>
          <a href="" className={styles.footerLink}>
            السجل التجاري
          </a>
          <a href="" className={styles.footerLink}>
            بيانات حساب العميل
          </a>
          <a href="" className={styles.footerLink}>
            الانضمام لفريق عملنا المبدع
          </a>
        </div>
        <div>
          <div className={styles.logoImgBox}>
            <img
              src="https://cdn.salla.sa/jZymR/VWHl7Qozkatk5gEv0RyjJSM9SAmRoXwz7lHNpkTm.png"
              alt=""
            />
          </div>
          <p className={styles.footerText}>
            مؤسسة العمودي للعود هي مؤسسة متخصصة في استيراد وتصدير جميع انواع دهن
            العود وبخور و العطورات وتهتم المؤسسة في جودة جميع الانواع و الوقوف
            عليها بخبرة مختصين في هذا المجال لكي يصل اليكم المنتج فاخر تماما
          </p>
          <div className={styles.taxBox}>
            <div className={styles.taxImgBox}>
              <img
                src="https://cdn.salla.network/images/tax.png?v=2.0.3"
                alt=""
              />
            </div>
            <div className={styles.taxImgContent}>
              <p>الرقم الضريبي</p>
              <p>310245118300003</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerContacts}>
        <a href="">
          <span>
            <AiOutlineMail className={styles.footerContactIcon} />
            info@oudamoudi.com
          </span>
        </a>
        <a href="">
          <span>
            <BsTelephone className={styles.footerContactIcon} />
            966550551524
          </span>
        </a>
        <a href="">
          <span>
            <CiMobile4 className={styles.footerContactIcon} />
            920033290
          </span>
        </a>
      </div>
      <div className={styles.footerSocialMedia}>
        <a href="" title="يوتيوب">
          <AiOutlineYoutube className={styles.footerSocialMediaIcon} />
        </a>
        <a href="" title="تيك توك">
          <PiTiktokLogoLight className={styles.footerSocialMediaIcon} />
        </a>
        <a href="" title="سناب شات">
          <BsSnapchat className={styles.footerSocialMediaIcon} />
        </a>
        <a href="" title="تويتر">
          <CiTwitter className={styles.footerSocialMediaIcon} />
        </a>
        <a href="" title="انستجرام">
          <AiOutlineInstagram className={styles.footerSocialMediaIcon} />
        </a>
      </div>
      <div className={styles.LowerFooterContainer}>
        <div className={styles.copyRights}>
          <p>الحقوق محفوظة | 2023</p>
          <a href="">العمودي للعود</a>
        </div>
        <div className={styles.paymentMethods}>
          <div className={styles.paymmentsImgBox}>
            <img
              src="https://cdn.salla.network/images/payment/cod_mini.png?v=2.0.3"
              alt=""
            />
          </div>
          <div className={styles.paymmentsImgBox}>
            <img
              src="https://cdn.salla.network/images/payment/apple_pay_mini.png?v=2.0.3"
              alt=""
            />
          </div>
          <div className={styles.paymmentsImgBox}>
            <img
              src="https://cdn.salla.network/images/payment/bank_mini.png?v=2.0.3"
              alt=""
            />
          </div>
          <div className={styles.paymmentsImgBox}>
            <img
              src="https://cdn.salla.network/images/payment/credit_card_mini.png?v=2.0.3"
              alt=""
            />
          </div>
          <div className={styles.paymmentsImgBox}>
            <img
              src="https://cdn.salla.network/images/payment/mada_mini.png?v=2.0.3"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
