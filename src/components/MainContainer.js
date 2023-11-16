import React from "react";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";
import Header from "./Header";

const MainContainer = () => {
  return (
    <div className="">
      <Header />
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
