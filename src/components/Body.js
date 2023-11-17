import React from "react";
import Sidebar from "./Sidebar";
import VideoContainer from "./VideoContainer";
import MainConatiner from "./MainContainer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex w-screen ">
      <Outlet />
    </div>
  );
};

export default Body;
