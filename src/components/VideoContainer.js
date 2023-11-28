import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

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
    <div className="flex flex-wrap w-full  ">
      {movies.map((movie) => (
        <Link to={"/watch?v=" + movie.id}>
          <VideoCard key={movie.id} info={movie} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
