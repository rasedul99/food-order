import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/res-logo.png";

import auth from "../../firebase.init";

const Header = () => {
  const menuItems = ["Home", "Foods", "Cart", "Contact"];
  const [show, setShow] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  console.log(user?.photoURL);
  const handleHambarger = () => {
    setShow(!show);
  };
  return (
    <nav className="flex justify-between  mx-2 md:h-20 items-center ">
      <div className="flex flex-col  items-center ">
        <img src={logo} alt="logo" className="w-10" />
        <p>Tasty Treat</p>
      </div>
      <ul className="hidden  md:flex">
        {menuItems.map((item) => (
          <li className="cursor-pointer px-5 hover:text-red-600 ">
            <NavLink
              to={item}
              className={({ isActive }) => (isActive ? "text-red-600" : "")}
            >
              {item}
            </NavLink>{" "}
          </li>
        ))}
      </ul>

      {show ? (
        <div
          onClick={handleHambarger}
          className=" absolute top-0 bottom-0 left-0   md:hidden w-full "
        >
          <div className="flex">
            <div className="w-3/5 h-screen bg-current opacity-50 "></div>
            <div className="flex flex-row justify-center items-center w-2/5  bg-slate-600 h-screen">
              <div className="flex flex-col  ">
                <ul>
                  {menuItems.map((item) => (
                    <li className="py-5  hover:text-red-600 ">
                      <Link to={item}>{item}</Link>{" "}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-x-3 cursor-pointer">
          <AiOutlineShoppingCart size={25} />
          {user?.photoURL ? (
            <div className="w-8">
              <img src={user.photoURL} className="rounded-full" />
            </div>
          ) : (
            <Link to="/login">
              <BiUserCircle size={25} />
            </Link>
          )}

          <div onClick={handleHambarger} className="md:hidden">
            <GiHamburgerMenu />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
