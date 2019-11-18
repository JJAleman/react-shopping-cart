import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
// import ShoppingCart from "./components/ShoppingCart";

import { ProductContext } from "./contexts/ProductContext";
import { CardContext } from "./contexts/CartContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
	// add the given item to the cart
	console.log("added to cart");
	setCart(item)
  };

  return (
	<ProductContext.Provider className="App" value={{ products, addItem }}>
		<CardContext.Provider value = {cart}>
      <Navigation />

      {/* Routes */}
      <Route
        exact path="/" component={Products}
      />

      <Route path="/cart" />
	  </CardContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
