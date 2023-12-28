import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWatchPageVideo, closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Spinner from "./Spinner";
import { key } from "../utils/constants";

const WatchPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  const [spinner, setSpinner] = useState(true);

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const id = searchParams.get("v");

  const [videoData, setVideoData] = useState(null);

  const getData = async () => {
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=" +
        id +
        key
    );
    const json = await data.json();
    console.log(json);

    setVideoData(json?.items[0]?.snippet);
    console.log(videoData?.title);
  };

  useEffect(() => {
    dispatch(closeMenu());
    getData();

    setTimeout(() => setSpinner(false), 200);
  }, []);

  return (
    <div className="flex bg-black ">
      <Sidebar />
      <div>
        <Header />

        {spinner ? (
          <Spinner />
        ) : (
          <div className=" flex bg-black flex-col">
            <div className="flex flex-col bg-black w-full  md:flex-row md:justify-between">
              <div className="">
                <iframe
                  className=" my-3  w-[400px] md:w-[800px] h-[200px] sm:h-[400px]  rounded-lg mx-4 "
                  width="800"
                  height="400"
                  src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <div className="flex text-white flex-col">
                  <h1 className=" px-2 text-xl m-2 ">{videoData?.title}</h1>
                  <h1 className=" px-2 m-2 text-red-700 font-semibold">
                    {videoData?.channelTitle}
                  </h1>
                  <h1 className=" px-2 m-2 ">{videoData?.publishedAt}</h1>
                </div>
                <div className="flex ">
                  <button className="bg-red-800 text-white rounded-lg p-2 m-2 w-36 hover:bg-red-600">
                    SUBSCRIBE
                  </button>
                  <button className="bg-blue-800 text-white rounded-lg p-2 m-2 w-36 hover:bg-blue-600 ">
                    LIKE
                  </button>
                </div>
              </div>

              <div className="">
                <LiveChat />
              </div>
            </div>

            <CommentContainer />
          </div>
        )}

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
