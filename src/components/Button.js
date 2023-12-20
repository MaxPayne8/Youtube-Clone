import React from "react";
import { key } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { searchData } from "../utils/appSlice";
import { Link } from "react-router-dom";

const Button = ({ name }) => {
  const dispatch = useDispatch();
  const getVideo = async () => {
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=" +
        name +
        "&type=video" +
        key
    );
    const json = await data.json();
    console.log(json);
    dispatch(searchData(json));
  };
  const data = useSelector((store) => store.app.data);
  console.log(data);
  return (
    <Link to="/results">
      <button
        onClick={() => getVideo()}
        className="bg-red-700 m-2 hover:bg-red-600 text-white p-1 rounded-lg"
      >
        {name}
      </button>
    </Link>
  );
};

export default Button;
