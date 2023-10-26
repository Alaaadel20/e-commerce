import { useState } from "react";
import styles from "./Login.module.css";
import { AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import PropTypes from "prop-types";

import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
function Login(props) {
  const [loginOption, setLoginOption] = useState(false);

  const customDropdownStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  };
  return (
    <>
      <div className={styles.overlay} onClick={props.handleShowLogin}></div>
      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <AiOutlineClose
            className={styles.closeIcon}
            onClick={props.handleShowLogin}
          />
          <div className={styles.imgBox}>
            <AiOutlineUser className={styles.userIcon} />
          </div>
          <div className={styles.contentBox}>
            <h4 className={styles.login}>تسجبل الدخول</h4>
            {!loginOption ? (
              <div>
                <label>رقم الجوال</label>
                <div className={styles.customInput}>
                  <ReactPhoneInput
                    country={"eg"}
                    placeholder="01001234567"
                    dropdownStyle={customDropdownStyle}
                  />
                </div>
              </div>
            ) : (
              <div>
                <label>البريد الالكتروني</label>
                <input
                  className={styles.email}
                  type="email"
                  placeholder="your@email.com"
                />
              </div>
            )}
            <button className={styles.loginBtn}>دخول</button>

            <button
              className={styles.loginOptionsBtn}
              onClick={() => setLoginOption(!loginOption)}
            >
              {loginOption
                ? "تسجيل الدخول برسالة نصية"
                : "تسجيل الدخول بالبريد الإلكتروني"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
Login.propTypes = {
  handleShowLogin: PropTypes.object.isRequired,
};
export default Login;
