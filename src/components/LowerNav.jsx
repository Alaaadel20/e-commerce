import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./LowerNav.module.css";

function LowerNav() {
  return (
    <div className="d-flex justify-content-start">
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className=" mb-3">
          <Container fluid>
            <Navbar.Brand href="#" className={styles.navbarBrand}>
              <img
                src="https://cdn.salla.sa/jZymR/VWHl7Qozkatk5gEv0RyjJSM9SAmRoXwz7lHNpkTm.png"
                alt="logo"
                className={styles.logo}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
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
                  <Nav.Link href="#action1">عطورات</Nav.Link>
                  <Nav.Link href="#action2">ادهان عود </Nav.Link>
                  <Nav.Link href="#action2">المباخر الذكية </Nav.Link>
                  <NavDropdown
                    title="عود بخور"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">مبثوث</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      عود بخور
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default LowerNav;
