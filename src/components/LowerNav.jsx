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
import { TbPerfume } from "react-icons/tb";
import { GiPerfumeBottle, GiDelicatePerfume } from "react-icons/gi";
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
    <div>
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
                  className={styles.Offcanvas}
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    ></Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body className={styles.OffcanvasBody}>
                    <Nav className="justify-content-end align-items-center flex-grow-1 pe-3 sidebarNav">
                      <Link to="/otour" className={styles.navLink}>
                        <span>
                          <TbPerfume className={styles.tbPerfume} />
                        </span>
                        عطورات
                      </Link>
                      <Link to="/adhan" className={styles.navLink}>
                        <span>
                          <GiPerfumeBottle className={styles.giPerfume} />
                        </span>
                        ادهان عود
                      </Link>
                      <Link to="/maba5er" className={styles.navLink}>
                        <span>
                          <TbPerfume className={styles.tbPerfume} />
                        </span>
                        المباخر الذكية
                      </Link>
                      <span>
                        <GiDelicatePerfume className={styles.giPerfumeDrop} />
                      </span>
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
      </div>
      <div>
        {showSearchBar && (
          <div className={styles.overlay}>
            <SearchBar handleShowSearchBar={handleShowSearchBar} />
          </div>
        )}
        {showLogin && (
          <div className={styles.overlay}>
            <Login handleShowLogin={handleShowLogin} />
          </div>
        )}
      </div>
    </div>
  );
}

export default LowerNav;
