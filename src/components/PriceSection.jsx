import React from "react";
import Counter from "./Counter";
import iconCart from "../../images/icon-cart.svg";
const PriceSession = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col gap-3 p-5 font-default">
        <h3 className="text-sm font-bold text-orange">SNEAKER COMPANY</h3>
        <h2 className="text-3xl font-bold">
          Fall Limited Edition <br /> Sneakers
        </h2>
        <p className="my-1 text-base leading-6 text-gray-400 ">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        {/* Price tag */}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-bold">$125.00</h2>
            <p className="text-md rounded-md border bg-paleOrange px-2 font-bold text-orange">
              50%
            </p>
          </div>
          <p className="text-lg tracking-wide text-gray-400 line-through decoration-[2px]">
            $250.00
          </p>
        </div>

        {/* Counter */}
        <Counter />
        <button className="bg-orange rounded-lg">
          <div className="flex items-center justify-center gap-4 py-4">
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#fff"
                fill-rule="nonzero"
              />
            </svg>

            <p className="text-md font-bold text-white">Add to cart</p>
          </div>
        </button>
      </div>
    </section>
  );
};

export default PriceSession;
