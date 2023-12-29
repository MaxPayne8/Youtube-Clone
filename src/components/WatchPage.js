import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
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
  const [data, setData] = useState(true);

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const id = searchParams.get("v");
  const getWatchVideoData = async () => {
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=" +
        id +
        key
    );
    const json = await data.json();
    console.log(json);
    setData(json?.items[0]?.snippet);
  };

  useEffect(() => {
    dispatch(closeMenu());
    getWatchVideoData();

    setTimeout(() => setSpinner(false), 200);
  }, []);

  return (
    <div className="flex bg-black  ">
      <Sidebar />
      <div>
        <Header />

        {spinner ? (
          <Spinner />
        ) : (
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
                <div className="flex flex-col text-white">
                  <h1 className="mx-2 px-2 text-xl">{data?.title}</h1>
                  <h1 className="mx-2 px-2 font-bold text-red-700">
                    {data?.channelTitle}
                  </h1>

                  <h1 className="mx-2 px-2 my-1 text-slate-300">
                    {data?.publishedAt}
                  </h1>
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

              <LiveChat />
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
