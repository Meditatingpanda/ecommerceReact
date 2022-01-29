import Product from "./Product";

const Products = ({ products, onAddToCart }) => {
  return (
    <div className=" flex  flex-wrap justify-evenly mt-5 ">
      {products.map((key) => {
        return <Product key={key.id} product={key} onAddToCart={onAddToCart} />;
      })}
    </div>
  );
};

export default Products;
