import React from "react";
import banner from "../../assets/images/banner-02.jpg";
const Banner = ({ title }) => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${banner})` }}
        className="bg-cover bg-center h-40 flex items-center"
      >
        <h1 class="text-3xl text-white  font-bold ml-16">{title}</h1>
      </div>
    </div>
  );
};

export default Banner;
