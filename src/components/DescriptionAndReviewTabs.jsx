import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import ProductDescription from "./ProductDescription";
import CustomersReview from "./CustomersReview";
import styles from "./DescriptionAndReviewTabs.module.scss";
function DescriptionAndPrefiewTabs() {
  return (
    <div className={styles.container}>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item className={styles.navItem}>
                <Nav.Link className={styles.navLink} eventKey="first">
                  تفاصيل المنتج
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className={styles.navItem}>
                <Nav.Link
                  className={styles.navLink}
                  eventKey="second"
                  style={{ color: "#fff" }}
                >
                  تقييمات المنتج
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9} className={styles.tabContentContainer}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <ProductDescription />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <CustomersReview />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default DescriptionAndPrefiewTabs;
