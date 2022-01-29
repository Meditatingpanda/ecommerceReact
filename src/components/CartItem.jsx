import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const CartItem = ({ item, handleRemoveFromCart, handleUpdateCartQty }) => {
  return (
    <div>
      <Card
        sx={{
          height: "auto",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            height: "10rem",
            objectFit: "contain",
            mt: 2,
          }}
          image={item.image.url}
        />
        <CardContent sx={{ color: "text.secondary" }}>
          <Typography variant="h5">{item.name}</Typography>
          <Typography variant="h5">
            {item.price.formatted_with_symbol}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button>-</Button>
            <Typography>{item.quantity}</Typography>
            <Button>+</Button>
          </Box>
          <Button
            variant="contained"
            color="error"
            sx={{ ml: 1 }}
            onClick={() => handleRemoveFromCart(item.id)}
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CartItem;
