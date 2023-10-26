import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./LowerNav.module.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Login from "./Login";

function LowerNav() {
  const { getTotalCartCount } = useContext(ShopContext);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const handleShowSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };
  const handleShowLogin = () => {
    setShowLogin(!showLogin);
  };
  console.log(showSearchBar);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={isSticky ? styles.sticky : styles.navbarContainer}>
      <div className="d-flex justify-content-start">
        {["lg"].map((expand) => (
          <Navbar key={expand} expand={expand} className=" mb-3">
            <Container fluid>
              <Navbar.Brand href="#" className={styles.navbarBrand}>
                <Link to="/">
                  <img
                    src="https://cdn.salla.sa/jZymR/VWHl7Qozkatk5gEv0RyjJSM9SAmRoXwz7lHNpkTm.png"
                    alt="logo"
                    className={styles.logo}
                  />
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end align-items-center flex-grow-1 pe-3">
                    <Link to="/otour" className={styles.navLink}>
                      عطورات
                    </Link>
                    <Link to="/adhan" className={styles.navLink}>
                      ادهان عود
                    </Link>
                    <Link to="/maba5er" className={styles.navLink}>
                      المباخر الذكية
                    </Link>

                    <NavDropdown
                      className={styles.dropdown}
                      title="عود بخور"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <Link className={styles.navLinkDropdown} to="mabsos">
                        مبثوث
                      </Link>
                      <Link className={styles.navLinkDropdown} to="oudBo5our">
                        عود بخور
                      </Link>
                    </NavDropdown>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>

      <div className={styles.navbarActions}>
        {showSearchBar && (
          <SearchBar handleShowSearchBar={handleShowSearchBar} />
        )}
        <div>
          <AiOutlineSearch
            className={styles.searchIcon}
            onClick={handleShowSearchBar}
          />
        </div>
        <div>
          <AiOutlineUser
            className={styles.userIcon}
            onClick={handleShowLogin}
          />
        </div>
        <Link to="/cart">
          <div>
            <span className={styles.cartCount}>
              {getTotalCartCount().toLocaleString("ar-EG")}
            </span>
            <AiOutlineShoppingCart className={styles.cartIcon} />
          </div>
        </Link>
      </div>
      {showLogin && <Login handleShowLogin={handleShowLogin} />}
    </div>
  );
}

export default LowerNav;
