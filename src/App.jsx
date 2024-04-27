import "bootstrap/dist/css/bootstrap.css";
// import React from "react";
import Cart from "./Cart";
import { CartProvider } from "./Createcontext";

// import './App.css'

function App() {
  return (
    <CartProvider>
      <Cart />
    </CartProvider>
  );
}
export default App;
