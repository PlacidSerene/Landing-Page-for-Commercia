import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import PriceSection from "./components/PriceSection";
import Cart from "./components/Cart";
import { GlobalContext } from "./context/GlobalContext";
import React from "react";
export default function App() {
  const [numberOfItems, setNumberOfItems] = React.useState(0);
  const [showCart, setShowCart] = React.useState(false);
  return (
    <GlobalContext.Provider
      value={{ numberOfItems, setNumberOfItems, showCart, setShowCart }}
    >
      <Navbar />
      <ImageSlider />
      <PriceSection />
      <Cart />
    </GlobalContext.Provider>
  );
}
