import React from "react";
import ButtonList from "./ButtonList";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isOpen = useSelector((store) => store.app.isMenuOpen);
  return isOpen ? (
    <div className="w-36 pl-4 shadow-lg">
      <h1 className="font-bold"> Subscriptions</h1>
      <ul>
        <li>Movies</li>
        <li>Music</li>
        <li>Sports</li>
        <li>Games</li>
      </ul>
      <h1 className="font-bold pt-5"> Watch Later</h1>
      <ul>
        <li>Simpli Learn</li>
        <li>React Js Tuts</li>
        <li>Boston-Code</li>
        <li>Microsoft</li>
      </ul>
      <h1 className="font-bold pt-5"> Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Movies</li>
        <li>Fashion and Beauty</li>
        <li>Gaming</li>
        <li>Travel</li>
        <li>Food</li>
        <li>Learning</li>
      </ul>
    </div>
  ) : null;
};

export default Sidebar;
