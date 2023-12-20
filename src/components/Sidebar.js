import React from "react";
import ButtonList from "./ButtonList";
import { useDispatch, useSelector } from "react-redux";
import { key } from "../utils/constants";
import { searchData } from "../utils/appSlice";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  const getVideo = async (listItem) => {
    console.log(listItem);
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=" +
        listItem +
        "&type=video" +
        key
    );
    const json = await data.json();
    console.log(json);
    dispatch(searchData(json));
  };
  const subsArr = ["Movie", "Music", "Sports", "Games"];
  const watchLaterArr = [
    "Simpli Learn",
    "React Js Tuts",
    "Boston Code",
    "Microsoft",
  ];
  const exploreArr = [
    "Trending",
    "Shopping",
    "TV Shows",
    "Fashion and Beauty",
    "Gaming",
    "Travel",
    "Food",
    "Learning",
  ];
  const isOpen = useSelector((store) => store.app.isMenuOpen);
  return isOpen ? (
    <div className="bg-black text-slate-100 pt-16 px-4 shadow-lg">
      <h1 className="pb-2 text-red-600 font-bold "> Subscriptions</h1>
      <ul>
        {subsArr.map((item, index) => (
          <Link to="/results">
            {" "}
            <li
              className="py-1 hover:shadow-md hover:shadow-gray-500"
              onClick={() => getVideo(subsArr[index])}
            >
              {subsArr[index]}
            </li>
          </Link>
        ))}
      </ul>

      <h1 className="font-bold text-red-600 pb-2 pt-5"> Watch Later</h1>
      <ul>
        {watchLaterArr.map((item, index) => (
          <Link to="/results">
            {" "}
            <li
              className="py-1 hover:shadow-md hover:shadow-gray-500"
              onClick={() => getVideo(watchLaterArr[index])}
            >
              {watchLaterArr[index]}
            </li>
          </Link>
        ))}
      </ul>

      <h1 className="font-bold text-red-600 pb-2 pt-5"> Explore</h1>
      <ul>
        {exploreArr.map((item, index) => (
          <Link to="/results">
            {" "}
            <li
              className="p-1 hover:shadow-md hover:shadow-gray-500"
              onClick={() => getVideo(exploreArr[index])}
            >
              {exploreArr[index]}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  ) : null;
};

export default Sidebar;
