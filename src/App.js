import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <LandingPage />
      </div>
    </CartProvider>
  );
}

export default App;
