import "../style/main.css";
import { Search, ShoppingCart } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

const Navbar = () => {
  return (
    <div className="  bg-blue-600 h-24  sm:h-20  flex items-center justify-center">
      <div className=" flex  items-center sm:justify-around  w-[95%] h-7">
        <div className="sm:w-[60%] grid grid-cols-2 sm:flex w-full">
          <div>
            <img
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fk-plus_3b0baa.png"
              className=" ml-3 mb-3 h-6 sm:h-8"
            />
          </div>
          <div className=" flex  justify-self-end mr-1 cursor-pointer sm:hidden">
          <div className="mr-5 text-white">
            <Badge badgeContent={9999} color="secondary" className="mr-3">
            <ShoppingCart/>
            </Badge>
            Cart
          </div>
            <i className="fas fa-bars text-white text-lg"></i>
          </div>

          <div className="sm:w-[50%]  col-start-1 col-span-2 ml-2">
            <div className="flex ">
              <input
                type="text"
                className=" rounded rounded-r-none pl-3 pt-2 pb-2 w-full  text-sm focus:outline-none"
                placeholder="search here"
              />

              <div className="bg-white  rounded-r flex items-center">
                <Search className="text-blue-600 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        <div className="text-base sm:flex  text-white  hidden sm:visible ">
          <div className="mr-5">Login</div>
          <div className="mr-5">Sign Up</div>
          <div className="mr-5">
            <Badge badgeContent={9999} color="secondary" className="mr-3">
            <ShoppingCart/>
            </Badge>
            Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
