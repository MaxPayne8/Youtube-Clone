import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_API, YOUTUBE_SEARCH_API } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const toggle_menu = () => {
    dispatch(toggleMenu());
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestion, setShowSuggestions] = useState(false);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log("API-CALL : " + searchQuery);
    console.log(json[1]);
    setSearchResults(json[1]);
  };

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  return (
    <div className="flex justify-between shadow-lg">
      <div className="flex  ">
        <img
          onClick={() => toggle_menu()}
          className=" h-8 ml-4 mt-1 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          alt="hamburger-logo"
        />
        <a href="/">
          <img
            className="h-8 ml-4 mt-1"
            src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
            alt="utube-logo"
          />
        </a>
      </div>

      <div className="flex ">
        <input
          className="border-2 border-black w-96 h-10 mt-1 rounded-lg p-1"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        ></input>
        <button className="px-3 py-1 mx-3 rounded-lg text-white bg-black h-10 mt-1">
          Smart-Search
        </button>
        <img
          className="h-10 mt-1"
          src="https://pixsector.com/cache/fb36ec30/av5e4cb285ffdbbf48898.png"
          alt="voice-search"
        />

        {showSuggestion && (
          <div className="absolute bg-white mt-11  p-2 cursor-pointer w-96 rounded-lg shadow-lg ">
            <ul>
              {searchResults.map((res) => (
                <li className="py-2 px-3 hover:bg-slate-400 shadow-sm">
                  {res}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img
          src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
          alt="profile-pic"
          className="h-16 -mt-2"
        />
      </div>
    </div>
  );
};

export default Header;
