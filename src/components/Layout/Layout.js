import React from "react";
import Routers from "../../routes/Routers";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div>
      <div className=" max-w-7xl mx-auto   bg-white">
        <Header />
        <div>
          <Routers />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
