import React from "react";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";
import Header from "./Header";
import Sidebar from "./Sidebar";

const MainContainer = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div>
        <Header />
        <ButtonList />
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
