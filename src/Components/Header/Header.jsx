import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useCart from "../../Hooks/useCart";

const Header = () => {
  const {
    state: { cartItems },
  } = useCart();
  const links = [
    {
      link: "/cart",
      item: (
        <div className="relative">
          <AiOutlineShoppingCart className="text-xl" />
          {cartItems.length > 0 && (
            <span className="absolute -top-3 right-2 bg-green-500 p-0.5 w-5 h-5 -z-10 rounded-full text-white text-xs flex justify-center items-center">
              {cartItems.length}
            </span>
          )}
        </div>
      ),
      key: "cart",
    },
    {
      link: "/",
      item: "Home",
      key: "home",
    },
    {
      link: "/about",
      item: "About",
      key: "about",
    },
    {
      link: "/signup",
      item: "Sign Up",
      key: "signup",
    },
  ];
  return (
    <nav className="shadow-md  p-3">
      <div className="flex h-full w-[85%] mx-auto justify-between items-center">
        {/* Logo  */}
        <div className=" h-full flex justify-between items-center ">
          <Link to="/">
            <h1 className="text-yellow-600 font-bold text-2xl">FoodCon🍕</h1>
          </Link>
        </div>

        {/* page links */}
        <div>
          <ul className="flex space-x-5 items-center justify-center text-yellow-600">
            {links.map((item) => (
              <li key={item.key} className=" hover:text-red-600">
                <Link to={item.link}>{item.item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
