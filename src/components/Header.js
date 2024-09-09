import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchData, toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import {
  YOUTUBE_API,
  YOUTUBE_SEARCH_API,
  YOUTUBE_VIDEO,
  key,
} from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const toggle_menu = () => {
    dispatch(toggleMenu());
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestion, setShowSuggestions] = useState(false);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + "q=" + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSearchResults(json[1]);
  };

  const getVideo = async () => {
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=" +
        searchQuery +
        "&type=video" +
        key
    );
    const json = await data.json();
    console.log(json);
    dispatch(searchData(json));
  };
  const getVideo1 = async (value) => {
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=" +
        value +
        "&type=video" +
        key
    );
    const json = await data.json();
    console.log(json);
    dispatch(searchData(json));
  };
  const data = useSelector((store) => store.app.data);
  console.log(data);

  const handleCheck = (e) => {
    alert(e.target);
  };

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  return (
    <div className="flex justify-between items-center w-full mx-auto sm:w-auto bg-black shadow-lg ">
      <div className="flex justify-evenly  ">
        <img
          onClick={() => toggle_menu()}
          className=" h-6 md:h-8 ml-4 md:mt-2 my-auto bg-slate-100 rounded-lg cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          alt="hamburger-logo"
        />
        <Link to="/">
          <img
            className="hidden md:h-8 md:ml-4 bg-slate-100 rounded-lg p-1 md:mt-2  md:block"
            src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
            alt="utube-logo"
          />
        </Link>
        <Link to="/">
          <img
            className="h-8 ml-2  w-18 z-20 rounded-lg  md:hidden"
            src="https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg"
            alt="utube-logo"
          />
        </Link>
      </div>

      <div className="flex items-center ">
        <form>
          <div className="flex justify-stretch items-center">
            <input
              className="border-2 border-black w-28 ml-2 md:w-80 h-auto md:h-10  rounded-lg p-1"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() =>
                setTimeout(() => {
                  setShowSuggestions(false);
                }, 300)
              }
            ></input>
            <Link to="/results">
              <button
                className="px-3 hidden md:block py-1 mx-3 rounded-lg text-white bg-violet-700 font-semibold hover:bg-violet-900  mt-1"
                onClick={() => getVideo()}
              >
                Smart-Search
              </button>
            </Link>

            <Link to="/results">
              <button
                className="m-2 ml-2  p-1 border-2  border-white rounded-lg w-10 hover:bg-orange-500 md:hidden"
                onClick={() => getVideo()}
              >
                🔍
              </button>
            </Link>
          </div>
        </form>

        <img
          className="h-8 mr-6 hidden md:block mt-2 rounded-full "
          src="https://play-lh.googleusercontent.com/C3oTVtjw9Xl3icZ9XAT1-U8QBEEXX9rXZbC26-DL9lwstzC3RIKwLeQMT57CZbS4QA"
          alt="voice-search"
        />

        {showSuggestion && (
          <div className="absolute  bg-white top-11 ml-2 cursor-pointer w-auto  rounded-lg shadow-lg ">
            <ul>
              {searchResults.map((res, index) => (
                <Link to="/results">
                  <li
                    onClick={() => getVideo1(res)}
                    className="py-2 px-3 hover:bg-slate-400 shadow-sm"
                  >
                    {res}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img
          src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
          alt="profile-pic"
          className="h-11 mt-1 hidden md:block mx-2 w-10 md:w-auto rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
