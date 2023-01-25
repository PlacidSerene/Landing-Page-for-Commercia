import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import PriceSection from "./components/PriceSection";
import Cart from "./components/Cart";
import { GlobalContext } from "./context/GlobalContext";
import React from "react";
import ImagesSliderModal from "./components/ImagesSliderModal";
export default function App() {
  const [numberOfItems, setNumberOfItems] = React.useState(0);
  const [showCart, setShowCart] = React.useState(false);
  const [showImageModal, setShowImageModal] = React.useState(false);
  return (
    <GlobalContext.Provider
      value={{
        numberOfItems,
        setNumberOfItems,
        showCart,
        setShowCart,
        showImageModal,
        setShowImageModal,
      }}
    >
      <main>
        {/* Navbar */}
        <Navbar />
        {/* Product Hero */}
        <div className="container mx-auto flex flex-col md:flex-row md:gap-10 md:p-12">
          <ImageSlider />
          <PriceSection />
        </div>
        <ImagesSliderModal />
      </main>
    </GlobalContext.Provider>
  );
}
