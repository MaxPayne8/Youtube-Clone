import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const SearchedVideo = () => {
  const data = useSelector((store) => store.app.data?.items);

  console.log(data);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 400);
  }, []);

  return (
    <div className="bg-black ">
      {spinner ? (
        <Spinner />
      ) : (
        <div className="flex text-slate-100 bg-black flex-col">
          <div className="flex justify-center">
            <Link to="/">
              <button className=" w-40 rounded-lg hover:bg-red-600 p-2 m-2 bg-red-700 text-white font-semibold">
                HOME-PAGE
              </button>
            </Link>
          </div>

          {data?.length === 20 ? (
            <div className="flex flex-wrap w-full justify-center ">
              {data?.map((movie) => (
                <Link to={"/watch?v=" + movie.id.videoId}>
                  <VideoCard key={movie.id.videoId} info={movie} />
                </Link>
              ))}
            </div>
          ) : (
            <Spinner />
          )}
        </div>
      )}
      <button
        onClick={() => window.scrollTo(0, 0)}
        className="px-3 relative flex justify-center  rounded-lg mx-auto  text-white bg-violet-700 font-semibold hover:bg-violet-900  mt-1"
      >
        TOP
      </button>
    </div>
  );
};

export default SearchedVideo;
