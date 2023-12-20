import React, { useEffect, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import Header from "./Header";
import Sidebar from "./Sidebar";

const WatchPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const getComments = async () => {
    const data = await fetch(
      "https://corsproxy.org/?https%3A%2F%2Fdevelopers.google.com%2Fapis-explorer%2F%23p%2Fyoutube%2Fv3%2Fyoutube.commentThreads.list%3Fpart%3Dsnippet%2Creplies%26videoId%3D" +
        searchParams.get("v")
    );
    const json = await data.json();
    console.log(json);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    getComments();
  }, []);
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  return (
    <div className="flex bg-black w-full ">
      <Sidebar />
      <div>
        <Header />
        <div className=" flex  flex-col">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="">
              <iframe
                className=" my-3 w-[90%] md:w-[800px] h-[200px] sm:h-[400px]  rounded-lg mx-4 "
                width="800"
                height="400"
                src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <div className="flex ">
                <button className="bg-red-800 text-white rounded-lg p-2 m-2 w-36 hover:bg-red-600">
                  SUBSCRIBE
                </button>
                <button className="bg-blue-800 text-white rounded-lg p-2 m-2 w-36 hover:bg-blue-600 ">
                  LIKE
                </button>
              </div>
            </div>

            <LiveChat />
          </div>

          <CommentContainer />
        </div>
        <button
          onClick={() => window.scrollTo(0, 0)}
          className="px-3 relative flex justify-center  rounded-lg mx-auto  text-white bg-violet-700 font-semibold hover:bg-violet-900  mt-1"
        >
          TOP
        </button>
      </div>
    </div>
  );
};

export default WatchPage;
