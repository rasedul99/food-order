import React from "react";
import { useSelector } from "react-redux";
import Routers from "../../routes/Routers";
import Carts from "../Carts/Carts";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = () => {
  const toggle = useSelector((state) => state.toggle.display_cart);
  console.log(toggle);
  return (
    <div className="bg-white text-black">
      <div>
        <Header />
        <div> {toggle && <Carts />}</div>

        <div>
          <Routers />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
