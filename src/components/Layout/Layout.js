import React from "react";
import { useSelector } from "react-redux";
import Routers from "../../routes/Routers";
import Carts from "../Carts/Carts";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <div className="bg-white text-black">
      <div className=" max-w-7xl  mx-auto ">
        <Header />
        {cart && <Carts />}

        <div>
          <Routers />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
