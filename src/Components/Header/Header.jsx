import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const links = [
  {
    link: "/cart",
    item: <AiOutlineShoppingCart className="text-xl" />,
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

const Header = () => {
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
