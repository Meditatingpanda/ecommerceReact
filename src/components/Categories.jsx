import { CategoriesData } from "../data/data";
import Items from "./CategoriesItem";

const Categories = () => {
  return (
    <div className="h-auto mt-[7vh] items-center  flex flex-wrap justify-evenly">
      {CategoriesData.map((key) => {
        return <Items id={key.id} img={key.img} des={key.des} />;
      })}
    </div>
  );
};

export default Categories;
