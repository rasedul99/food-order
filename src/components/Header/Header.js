import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "../../assets/images/res-logo.png";

const Header = () => {
  const menuItems = ["Home", "Foods", "Cart", "Contact"];
  return (
    <nav className="flex justify-between mx-2 h-20 items-center">
      <div className="flex flex-col items-center">
        <img src={logo} alt="logo" className="w-10" />
        <p>Tasty Treat</p>
      </div>
      <ul className="flex">
        {menuItems.map((item) => (
          <li>
            <Link to={item} className="px-5 hover:text-red-600 h">
              {item}
            </Link>{" "}
          </li>
        ))}
      </ul>
      <div className="flex gap-x-5">
        <AiOutlineShoppingCart size={25} />
        <BiUserCircle size={25} />
      </div>
    </nav>
  );
};

export default Header;
