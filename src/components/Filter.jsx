import products from "../db/data";
import { useState } from "react";
function Filter() {
  const [selectedList, setSelectedList] = useState([]);
  bestsellerList = products.filter((product) => product.bestseller === true);

  return (
    <div>
      <select value={selectedPriceRange} onChange={handlePriceRangeChange}>
        <option value="">h</option>
        <option value="low">Low Prices</option>
        <option value="high">High Prices</option>
      </select>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>
            {item.name} - Price: {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
