// import {ShoppingCartIcon,SearchIcon} from '@mui/icons-material';
import { ShoppingCart, Search } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from '../assets/img/logo.png'
const Navbar = ({ cart }) => {
  const navigate = useNavigate();
  return (
    <div className="  bg-black h-24  sm:h-20  flex items-center justify-center">
      <div className=" flex  items-center sm:justify-around  w-[95%] h-7">
        <div className="sm:w-[60%] grid grid-cols-2 sm:flex w-full">
          <div onClick={() => navigate("/")} className="cursor-pointer">
            <div className=" ml-3 mr-5 mb-3 text-3xl text-red-600">
              SPORTIFY
            </div>
           
          </div>
          <div className=" flex  justify-self-end mr-1 cursor-pointer sm:hidden">
            <div className="mr-5 text-white">
              <Badge
                onClick={() => navigate("/cart")}
                badgeContent={cart.total_items}
                color="secondary"
                className="mr-3"
              >
                <ShoppingCart />
              </Badge>
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
            <IconButton
              sx={{
                color: "white",
                mt: -1,
              }}
              onClick={() => navigate("/cart")}
            >
              <Badge
                badgeContent={cart.total_items}
                color="secondary"
                className="mr-3"
              >
                <ShoppingCart />
              </Badge>
              Cart
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
