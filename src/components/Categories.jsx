import { CategoriesData } from "../data/data";
import Items from "./CategoriesItem";

const Categories = () => {
  return (
    <div className="h-[40vh] mt-[5vh] items-center flex-wrap flex  justify-evenly">
      {CategoriesData.map((key) => {
        return <Items id={key.id} img={key.img} des={key.des} />;
      })}
    </div>
  );
};

export default Categories;
