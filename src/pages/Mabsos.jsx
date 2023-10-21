import Product from "../components/Product";

import products from "../db/data";

function Mabsos() {
  return (
    <div>
      <div className="row  ">
        {products
          .filter((item) => item.category === "mabsos")
          .map((item) => (
            <Product
              key={item.id}
              id={item.id}
              name={item.productName}
              img={item.img}
              priceA={item.price}
            />
          ))}
      </div>
    </div>
  );
}

export default Mabsos;
