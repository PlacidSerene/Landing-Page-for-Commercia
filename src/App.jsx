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
      <main>
        {/* Navbar */}
        <Navbar />
        {/* Product Hero */}
        <div className="flex flex-col md:flex-row container mx-auto md:p-12 md:gap-10">
          <ImageSlider />
          <PriceSection />
        </div>
        <Cart />
      </main>
    </GlobalContext.Provider>
  );
}
