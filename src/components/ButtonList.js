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
    <div className=" overflow-x-scroll">
      <div className="flex flex-wrap ">
        {list.map((category, index) => (
          <Button name={category} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
