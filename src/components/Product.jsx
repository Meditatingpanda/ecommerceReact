import {
  Favorite,
  Search,
  ShoppingBasket,
  ShoppingCart,
} from "@material-ui/icons";

const Product = ({ item }) => {
  return (
    <div className="w-1/4 m-1  shadow-md  min-w-[9rem] aspect-square bg-[#F5FBFD]  relative flex justify-center items-center">
      <div>
        <img src={item.img} className="object-scale-down" />
      </div>
      <div className="absolute opacity-0 hover:opacity-100 hover:bg-[rgba(0,0,0,0.4)] transition-all  ease-in-out flex h-full w-full justify-center items-center ">
        <div className="flex">
          <div className="hover:scale-110 hover:bg-red-200  transition-all ease-in   bg-white rounded-full top-1/2 m-1 h-10 w-10 flex items-center justify-center">
            <ShoppingCart />
          </div>
          <div className="hover:scale-110 hover:bg-red-200  transition-all ease-in bg-white rounded-full m-1 h-10 w-10 flex items-center justify-center">
            <Search />
          </div>
          <div className="hover:scale-110 hover:bg-red-200 transition-all ease-in  bg-white rounded-full m-1 h-10 w-10 flex items-center justify-center">
            <Favorite />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
