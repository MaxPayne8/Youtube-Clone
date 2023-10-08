import React from "react";

const Button = ({ name }) => {
  return (
    <button className="bg-gray-500 m-2 text-white p-1 rounded-lg">
      {name}
    </button>
  );
};

export default Button;
