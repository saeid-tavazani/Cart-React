import { Card, Button } from "react-bootstrap";
import { useCartContext } from "../context/CartContext";
type ProductsProps = {
  id: number;
  title: string;
  price: number;
  imgUrl: string;
};
export default function Products({ id, title, price, imgUrl }: ProductsProps) {
  const { getItemQty, addItem, decreaseItem, removeItem } = useCartContext();
  const qty: number = getItemQty(id);
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column bg-dark">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2 text-light">{title}</span>
          <span className="ms-2 text-light">{price}</span>
        </Card.Title>
        <div className="mt-auto">
          {qty === 0 ? (
            <Button className="w-100 btn-secondary" onClick={() => addItem(id)}>
              Add to Cart
            </Button>
          ) : (
            <div
              className="d-flex aling-align-items-center flex-column text-light"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center"
                style={{ gap: ".5rem" }}
              >
                <Button
                  className="text-bg-secondary"
                  onClick={() => addItem(id)}
                >
                  +
                </Button>
                <span className="fs-5 m-3">{qty}</span>
                <Button
                  className="text-bg-secondary"
                  onClick={() => decreaseItem(id)}
                >
                  -
                </Button>
              </div>
              <Button
                className="link-dark"
                size="sm"
                onClick={() => removeItem(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
