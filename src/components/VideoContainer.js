import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import ClipLoader from "react-spinners/ClipLoader";
import Spinner from "./Spinner";

const VideoContainer = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getVideoCards();
  }, []);

  const getVideoCards = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    console.log(json);
    setMovies(json?.items);
  };

  return (
    <div className="bg-black ">
      <div className="flex flex-wrap w-full justify-center   ">
        {movies.length ? (
          movies.map((movie) => (
            <Link to={"/watch?v=" + movie.id}>
              <VideoCard key={movie.id} info={movie} />
            </Link>
          ))
        ) : (
          <Spinner />
        )}
      </div>
      {movies.length ? (
        <button
          onClick={() => window.scrollTo(0, 0)}
          className="px-3 relative flex justify-center  rounded-lg mx-auto  text-white bg-violet-700 font-semibold hover:bg-violet-900  mt-1"
        >
          TOP
        </button>
      ) : null}
    </div>
  );
};

export default VideoContainer;
