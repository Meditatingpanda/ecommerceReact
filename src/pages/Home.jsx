import Categories from "../components/Categories";
import Items from "../components/CategoriesItem";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import { slider } from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      {slider}
      <Categories/>
      <Products/>
    </div>
  );
};

export default Home;
