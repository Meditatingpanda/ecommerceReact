import Navbar from "../components/Navbar";
import Newletter from "../components/Newsletter";
import Products from "../components/Products";
import { slider } from "../components/Slider";

const Home = ({ products, onAddToCart, cart }) => {
  return (
    <div>
      <Navbar cart={cart} />
      {slider}
      <Products products={products} onAddToCart={onAddToCart} />
      <Newletter />
    </div>
  );
};

export default Home;
