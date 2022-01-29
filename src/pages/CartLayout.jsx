import {
  Container,
  Grid,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import { Box, textAlign } from "@mui/system";
import { useState } from "react";
import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";

const Cart = ({ cart }) => {
  const EmptyCart = () => {
    return (
      <Typography
        variant="body1"
        sx={{ textAlign: "center", color: "text.secondary", mt: 5 }}
      >
        Oops! You have Nothing in ur cart
      </Typography>
    );
  };

  const FilledCart = () => {
    return (
      <>
        <Container sx={{ mt: 10 }}>
          <Grid container spacing={3}>
            {cart.line_items.map((item) => (
              <Grid item xs={12} sm={4} key={item.id}>
               <CartItem item={item}/>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container
          sx={{ mt: 10, display: "flex", justifyContent: "space-between" }}
        >
          <Typography variant="h5">
            Subtotal:- {cart.subtotal.formatted_with_symbol}
          </Typography>
          <Box>
            <Button variant="contained" color="error">Clear Cart</Button>
            <Button variant="contained">Checkout</Button>
          </Box>
        </Container>
      </>
    );
  };
  if (!cart.line_items) {
    return <div>
      <Navbar cart={cart} />
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          color: "text.secondary",
          mt: 4,
        }}
      >
        Your Shopping Cart
      </Typography>
      <Box sx={{display:'flex',justifyContent:'center',mt:10}}>
      <CircularProgress sx={{margin:'auto'}}/>
      </Box>
    </div>;
  }
  return (
    <div>
      <Navbar cart={cart} />
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          color: "text.secondary",
          mt: 4,
        }}
      >
        Your Shopping Cart
      </Typography>

      {cart.line_items.length ? <FilledCart /> : <EmptyCart />}
    </div>
  );
};

export default Cart;
