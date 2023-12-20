import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "Trending",
    " Mixes",
    "Music",
    "Fashion",
    "Relax",
    "Studing",
    "Technology",
    " News",
    "Travel",
    "Food",
    " Live",
    "Football",
    "Cricket",
    "Shopping",
    "Cooking",
    "Perfumes",
  ];
  return (
    <div className="flex flex-wrap  bg-black ">
      {list.map((category, index) => (
        <Button name={category} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
