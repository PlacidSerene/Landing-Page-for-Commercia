import React from "react";
import { GlobalContext } from "../context/GlobalContext";
import logo from "../images/logo.svg";
import iconMenu from "../images/icon-menu.svg";
import iconCart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import iconClose from "../images/icon-close.svg";
import Cart from "./Cart";

const Navbar = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const { numberOfItems, setShowCart, showCart } =
    React.useContext(GlobalContext);
  return (
    <nav>
      <div className="container mx-auto flex items-center justify-between p-6 md:px-0 py-6 font-default md:border-b md:border-gray-300 pb-10 ">
        <div className="flex gap-3 lg:gap-10">
          {/* Hamburger menu */}
          <div
            className={`flex cursor-pointer items-center md:hidden`}
            onClick={() => setOpenMenu(true)}
          >
            <img src={iconMenu} alt="" />
          </div>
          <img src={logo} alt="" className="cursor-pointer" />
          <div className="ml-5 hidden space-x-5 md:flex lg:space-x-10">
            <a href="#">Collections</a>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div
            className="relative"
            onClick={() => {
              setShowCart(!showCart);
            }}
          >
            {/* Cart and number of items */}
            <div className="relative">
              <img
                src={iconCart}
                alt="cart"
                className="h-6 w-6 cursor-pointer"
              />
              {numberOfItems !== 0 && (
                <div className="absolute -right-3 -top-2.5 rounded-xl bg-orange px-2 text-sm font-bold text-white">
                  {numberOfItems}
                </div>
              )}
              <Cart />
            </div>

            {/* Cart */}
          </div>

          <img src={avatar} alt="" className="h-8 w-8 " />
        </div>
      </div>
      {/* Drawer */}
      <aside
        className={`
        ${openMenu ? "translate-x-0" : "-translate-x-full"}
        fixed top-0 left-0 z-30 flex h-full w-[65%] flex-col gap-7 bg-white px-6 pt-6 duration-300 ease-in-out md:hidden`}
      >
        <img
          src={iconClose}
          alt=""
          className="h-4 w-4 cursor-pointer"
          onClick={() => setOpenMenu(false)}
        />
        <div className="flex flex-col space-y-4">
          <a className="text-lg font-bold">Collections</a>
          <a className="text-lg font-bold">Men</a>
          <a className="text-lg font-bold">Women</a>
          <a className="text-lg font-bold">About</a>
          <a className="text-lg font-bold">Contact</a>
        </div>
      </aside>
      {/* overlay */}
      <div
        className={`absolute inset-0 z-20 bg-black opacity-50 ${
          openMenu === false && "hidden"
        }`}
        onClick={() => setOpenMenu(false)}
      ></div>
      
    </nav>
  );
};

export default Navbar;
