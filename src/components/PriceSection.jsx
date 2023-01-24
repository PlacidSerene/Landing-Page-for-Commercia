import React from "react";
import Counter from "./Counter";
import { GlobalContext } from "../context/GlobalContext";
const PriceSession = () => {
  return (
    <section className="flex items-center md:w-1/2">
      <div className="container mx-auto flex flex-col gap-4 p-5 font-default">
        <h3 className="text-sm font-bold text-orange">SNEAKER COMPANY</h3>
        <h2 className="text-3xl font-bold lg:text-4xl">
          Fall Limited Edition <br /> Sneakers
        </h2>
        <p className="my-1 text-base leading-6 text-gray-400 ">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        {/* Price tag */}
        <div className="mt-3 flex items-start justify-between md:flex-col gap-3">
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
      </div>
    </section>
  );
};

export default PriceSession;
