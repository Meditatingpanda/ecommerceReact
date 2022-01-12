import Categories from "../components/Categories";
import Items from "../components/CategoriesItem";
import Navbar from "../components/Navbar";
import { slider } from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      {slider}
      <Categories/>
    </div>
  );
};

export default Home;
