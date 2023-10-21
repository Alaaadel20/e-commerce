import products from "../db/data";
import { useState } from "react";
function SearchBar() {
  const [input, setInput] = useState("");
  const filteredProduct = products.filter((product) =>
    product.productName.includes(input)
  );
  console.log(filteredProduct);
  console.log(input);
  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <div>
        {input &&
          filteredProduct.map((product) => (
            <p key={product.id}>{product.productName}</p>
          ))}
      </div>
    </div>
  );
}

export default SearchBar;
