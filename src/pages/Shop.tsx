import { Row, Col } from "react-bootstrap";
import Products from "../components/Products";
import products from "../data/products.json";
export default function Shop() {
  return (
    <Row md={2} xs={1} lg={3} className="g-3">
      {products.map((item) => (
        <Col key={item.id}>
          <Products {...item} />
        </Col>
      ))}
    </Row>
  );
}
