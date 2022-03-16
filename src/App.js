import Home from "./pages/Home";
import { commerce } from "./lib/commerce";
import { useEffect, useState } from "react";
import Cart from "./pages/CartLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./components/Checkout";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };
  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              products={products}
              onAddToCart={handleAddToCart}
              cart={cart}
            />
          }
        />

        <Route
          exact
          path="/cart"
          element={
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          }
        />
        <Route
          exact
          path="/checkout"
          element={
             <Checkout cart={cart}/>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
