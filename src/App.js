import Home from "./pages/Home";
import { commerce } from "./lib/commerce";
import { useEffect, useState } from "react";
import Cart from "./pages/CartLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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

        <Route exact path="/cart" element={<Cart cart={cart} />}/>
          
       
      </Routes>
    </Router>
  );
};

export default App;
