import React from "react";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const SearchedVideo = () => {
  const data = useSelector((store) => store.app.data?.items);

  console.log(data);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <Link to="/">
          <button className=" w-40 rounded-lg hover:bg-red-600 p-2 m-2 bg-red-700 text-white font-semibold">
            HOME-PAGE
          </button>
        </Link>
      </div>

      <div className="flex flex-wrap w-full justify-between  ">
        {data?.map((movie) => (
          <Link to={"/watch?v=" + movie.id.videoId}>
            <VideoCard key={movie.id.videoId} info={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchedVideo;
