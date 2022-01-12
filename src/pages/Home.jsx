import Categories from "../components/Categories";
import Items from "../components/CategoriesItem";
import Navbar from "../components/Navbar";
import Newletter from "../components/Newsletter";
import Products from "../components/Products";
import { slider } from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      {slider}
      <Categories/>
      <Products/>
      <Newletter/>
    </div>
  );
};

export default Home;
