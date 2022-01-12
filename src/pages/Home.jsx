import Categories from "../components/Categories";
import Items from "../components/CategoriesItem";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories/>
    </div>
  );
};

export default Home;
