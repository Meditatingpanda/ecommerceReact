import { popularProducts } from "../data/data";
import Product from "./Product";
const Products = () => {
  return (
    <div className=" flex  flex-wrap justify-evenly ">
      {popularProducts.map((key) => {
        return <Product key={key.id} item={key} />;
      })}
    </div>
  );
};

export default Products;
