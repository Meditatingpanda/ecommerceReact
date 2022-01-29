import { Favorite, Search, ShoppingCart } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/system";

const Product = ({ product,onAddToCart }) => {
 // console.log(product);
  return (
    <Card sx={{ maxWidth: 345, mb: 2 }}>
      <CardMedia
        component="img"
        sx={{
          height: "15rem",
          objectFit: "contain",
          mt: 2,
        }}
        image={product.image.url}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="text.secondary"
        />

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5" sx={{ mt: 3 }} color="text.secondary">
            {product.price.formatted_with_symbol}
          </Typography>
          <Typography
            variant="h5"
            sx={{ mt: 3 }}
            color="text.secondary"
          ></Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton onClick={()=>onAddToCart(product.id,1)}>
          <ShoppingCartIcon />
        </IconButton>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;

// Old product cards

// <div className="w-1/4 m-1  shadow-md  min-w-[9rem] aspect-square bg-[#F5FBFD]  relative flex justify-center items-center">
//   <div>
//     <img src={item.image} className="object-cover" />
//   </div>
//   <div className="absolute opacity-0 hover:opacity-100 hover:bg-[rgba(0,0,0,0.4)] transition-all  ease-in-out flex h-full w-full justify-center items-center ">
//     <div className="flex">
//       <div className="hover:scale-110 cursor-pointer  hover:bg-red-200  transition-all ease-in   bg-white rounded-full top-1/2 m-1 h-10 w-10 flex items-center justify-center">
//         <ShoppingCart />
//       </div>
//       <div className="hover:scale-110 cursor-pointer  hover:bg-red-200  transition-all ease-in bg-white rounded-full m-1 h-10 w-10 flex items-center justify-center">
//         <Search />
//       </div>
//       <div className="hover:scale-110 cursor-pointer  hover:bg-red-200 transition-all ease-in  bg-white rounded-full m-1 h-10 w-10 flex items-center justify-center">
//         <Favorite />
//       </div>
//     </div>
//   </div>
// </div>
// Product Section cards
