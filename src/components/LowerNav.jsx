import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./LowerNav.module.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function LowerNav() {
  const { getTotalCartCount } = useContext(ShopContext);
  return (
    <>
      <SearchBar />
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
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Link to="/otour">عطورات</Link>
                    <Link to="/adhan">ادهان عود</Link>
                    <Link to="/maba5er">المباخر الذكية</Link>

                    <NavDropdown
                      title="عود بخور"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <Link to="mabsos">مبثوث</Link>
                      <Link to="oudBo5our">عود بخور</Link>
                    </NavDropdown>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
      <Link to="/cart">
        <AiOutlineShoppingCart className={styles.cartIcon} />
      </Link>
      <div>{getTotalCartCount()}</div>
    </>
  );
}

export default LowerNav;
