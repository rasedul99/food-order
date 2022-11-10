import React from "react";

const Category = ({ name, image }) => {
  return (
    <div>
      <div className="flex items-center gap-x-5 bg-red-200 py-5 px-4 rounded transition duration-500 ease-in-out hover:-translate-y-3">
        <img src={image} />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Category;
