import React from "react";
import { GlobalContext } from "../context/GlobalContext";
import product1Thumbnail from "../images/image-product-1-thumbnail.jpg";
import iconDelete from "../images/icon-delete.svg";
const Cart = () => {
  const { numberOfItems, setNumberOfItems, showCart, setShowCart } =
    React.useContext(GlobalContext);

  return (
    <div
      className={`${
        showCart ? "" : "hidden"
      } absolute top-[230px] left-[50%] z-10 flex h-[280px] w-[95%] -translate-x-[50%] -translate-y-[50%] flex-col rounded-lg bg-white shadow-2xl`}
    >
      <div className="flex justify-between border-b-2 p-5">
        <h2 className="text-lg font-bold">Cart</h2>
        <h2
          className="text-lg font-bold"
          onClick={() => {
            setShowCart(false);
          }}
        >
          X
        </h2>
      </div>
      <div
        className={`flex flex-col ${
          numberOfItems === 0 && "h-full items-center"
        } justify-center gap-5 p-5`}
      >
        <>
          {numberOfItems === 0 ? (
            <h2 className="text-lg font-bold text-gray-500">
              Your cart is empty.
            </h2>
          ) : (
            <div className="flex items-center gap-5">
              <div className="overflow-hidden rounded-lg">
                <img src={product1Thumbnail} alt="" className="w-16" />
              </div>

              <div>
                <p className="text-lg font-light text-gray-500">
                  Fall Limited Edition Sneakers
                </p>
                <p className="text-lg font-light text-gray-500">
                  $125.00 x {numberOfItems}{" "}
                  <span className="ml-2 font-bold">${125 * numberOfItems}</span>
                </p>
              </div>
              <img
                src={iconDelete}
                alt=""
                onClick={() => setNumberOfItems(0)}
              />
            </div>
          )}
        </>
        {numberOfItems !== 0 && (
          <button className="text-md flex-grow-1 rounded-lg bg-orange p-5 text-lg font-bold text-white">
            Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
