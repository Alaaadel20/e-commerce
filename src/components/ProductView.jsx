import products from "../db/data";
import { useParams } from "react-router-dom";

function ProductView() {
  const { id } = useParams();
  return <div>{products[id - 1].productName}</div>;
}

export default ProductView;
