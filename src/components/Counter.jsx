import React from "react";
import iconPlus from "../../images/icon-plus.svg";
import iconMinus from "../../images/icon-minus.svg";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="relative mt-4 rounded-lg border bg-lightGrayishBlue py-4 text-center ">
      <p className="font-bold">{count}</p>
      {/* Icon Minus */}
      <div
        className="absolute top-[45%] left-5 cursor-pointer"
        onClick={decrement}
      >
        <img src={iconMinus} alt="" />
      </div>
      {/* Icon Plus */}
      <div
        className="absolute top-[40%] right-5 cursor-pointer"
        onClick={increment}
      >
        <img src={iconPlus} alt="" />
      </div>
    </div>
  );
};

export default Counter;
