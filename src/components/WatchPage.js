import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import Header from "./Header";
import Sidebar from "./Sidebar";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  return (
    <div className="flex w-screen  md:w-auto  ">
      <Sidebar />
      <div>
        <Header />
        <div className="mt-4 flex flex-col">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div>
              <iframe
                className=" w-full md:w-[800px] rounded-lg border-4 border-violet-900 m-2 "
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
      </div>
    </div>
  );
};

export default WatchPage;
