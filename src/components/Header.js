import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
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
  const [search, setSearch] = useState(0);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log("API-CALL : " + searchQuery);
    console.log(json[1]);
    setSearchResults(json[1]);
  };

  const getVideo = async (res) => {
    const data = await fetch(YOUTUBE_VIDEO + res + key);
    const json = await data.json();
    console.log(json);
    setSearch(!search);
  };

  // useEffect(() => {
  //   getVideo();
  // }, []);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  return (
    <div className="flex justify-between w-full mx-auto sm:w-auto  shadow-lg ">
      <div className="flex  ">
        <img
          onClick={() => toggle_menu()}
          className=" h-8 ml-4 mt-2 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          alt="hamburger-logo"
        />
        <Link to="/">
          <img
            className="hidden md:h-8 md:ml-4 md:mt-2  md:block"
            src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
            alt="utube-logo"
          />
        </Link>
        <Link to="/">
          <img
            className="h-16 ml-2 -mt-2 w-18 z-10 md:hidden"
            src="https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg"
            alt="utube-logo"
          />
        </Link>
      </div>

      <div className="flex ">
        <input
          className="border-2 border-black w-28 ml-2 md:w-80 h-10 mt-1 rounded-lg p-1"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        ></input>
        <button className="px-3 hidden md:block py-1 mx-3 rounded-lg text-white bg-black md:h-10 mt-1">
          Smart-Search
        </button>
        <button className="m-2 ml-2  p-1 border-2 h-8 border-black rounded-lg w-8 hover:bg-orange-500 md:hidden">
          🔍
        </button>
        <img
          className="h-8 mr-6 pr-2 mt-2 "
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAABAlBMVEX///9DhfXqQjX6vAU0qFMzfvTG2Pz6uQBit3cspk54wYnpNCT+5ar4vLlBrV4ufPTqPjA3gPTc6P3pOyz7vwDh7P3z9/7V4/yAqff4x8P+8vHpMyLqPi/++PfrSDr85eNKi/WdvPlmmvbP3/z62Nb1rKf+8dLxhn/913//+Of//vnyj4jsWlDveG/5rxT5zsvznZfBZUEfrVSStvmKsfhzovayyvpQjfT95a/oHwD+6rvu8/7+7sfrTUH/++38353taV391G77xj37y1NglvbtY1n7xTa3zvr80Wz2sKzrTzL5sxLucWn0oZvpKxVzrXNnlUyCjk6RhEqgeEaxcEemn3ZVEYLjAAAGrklEQVR4nO2dbVvaSBSGIRSoG1mDEQSCgC9IFSjuYqtbS+vWWpddZXfb7v//K5vgGzkzgXmsSUhy7g/9NKYz93Xm5MyEayaVYpgkUC7t5nK5zbNy2B1Zdsq54U6rmHUonuwMd1mYJ5vHrWwx/Ugx2zpeD7tTy8nmTnHW1J2v4hvWJVCurAmm7nQdh923ZSOXFqPqQVd6M+zuLRXbWU9VDtm3YXdwiRh6TMEH1rbD7uLScDw/rtjWDNuL4opn4gM5FVd2mt8Nu6NLQNn7NejmhMv51BtVWVxvpXZVXdm2El/L7yi7ShcrYXc2ZIDAsm2Vwu5uuFQgWcOwuxsqZ4Aqm1bY/Q2V3OLafZa1RK+oj5FZaM/DRC96gHfhVNZO2B0OkXILk5VOh93jEClhKctOWgle8myqraFnZCW40tpFZWUTvOJR3J2ZiawE1w5gmWVHFstiWSqwLACWBcCyAFgWAMsCYFkALAsAlsUVPEeWErisJC+kWZY6LAuAZQGwLACWBcCyAFgWAMsCYFkALAsAX0izLI4sFVgWAMsCYFkALAuAZQGwLACWBcBFKQBHFgAuK8G/KcWnIcviyFKBcxYARxYAywJgWQAsC4BLBwCWBcDTEIBlAbAsAJYFwAkegGUBsCwAlgXAsgBYFgDLAmBZACwLgCv4Rw5WCYekwY9HVq1AqAU1uOfmNE84IA3gs2jWzsgTBr/ps1iTvaAG99y8y2dc5PdJg3U4suh/UbU0F3p8ZYHnI6bFw8YKuluW2QxobM/OeyrrPWlQPgFdCcfYtYksLbKy9qmsd7SF8sHKt4gHJHZNt6tRZBP8ByrrI23xFjx6Uzjm/NxwuTJ6wYzMD6is32mDEhZZaeHIPxJYxnkg4/KFDbet/CehBXT2pnjIeXNC8nsnkHH5wkWG8IG2eIuEVlaYhfRlqN8EMzA/eLWodsBOKhWPdO2QaahXAxmXL6wuzPCpbfXQWssJf10nhUN0yyyxdshciG2UQ0tyVvCA1O9aI4BB+QbNWRt0dQisDyVH59NZWL8OYlB+cUHn4anYRvHkbsnFO1skrjS9HcCYfOMjlSWZh6nPKrZkF1iM6VrHiuwy2kFIWuL70F5OK6wQpYeb9wwiq+77gPzk8AsNrVeSVqXWotgqfpYc112lgRXlktSBVloZYQPQ4WzBTMzuyI42v6SBZUW4ynIQ56EstFIpr3szp6xJ73Iq0LpBs3wdiv8cfqHVgyxr2Vx5Xp1ZbInFqM3WiAaW2fV1KAFA34ey1fSUckVyf61zx+hQfrtAl2YsLbr77/cc0MjK5Fc9mpbIzcjTu5GHHh+/9oRJaFz6NojA+IOGViYjy/FTzq4qJ9ls8ZZs9qSS87qzQpyEmlXwaQQBIqR4z4k4pbx+tT2sVCrD7Vxpzu0eHWESGqOtZ+978NAlj+cbEWAsTMKIL3XuEUPLO20pIuw2OIEV2U8VLsTQknznQWiagitNHz9Xd8PlQCJL+IQI0GwIyV0zenHIWA7CmieT2Xj95Ehojuj+qBbt/WQ3hxJXf1pP/LawJ3Nl9p+3x2FCv+Pbruy66Emrk4EhcRXpvXcB90ScurKnzjX+AhN+2zDFikl2v8W1nt74q3EXDyN0NdcXawbnOZHeehfZn3X1+A6bHCEPGTQkNYP9FC0ub8J7TvMPc9D1FhsNVJ9Q60rDKuo771Lu0tbG64Y7LCZ9peS8NdakYRW3hHXHtJCnrpyMo3cWhsbWuOcRVpoe+S0/GYef8jJXji7zujov7TRvRpZYtN+5ilGFNcuhhyubuj7qDOS+moXruu6lSjMv45bc7/nw2iPt2Bimbpy3B+7Kq1k96pm6rAq9dxWbJaGEvrSmfIwva6L3+t2bdrt91L0eWRPL9Iyp2LuSfWYQQ8w0dV23/53ryUE/j7WrVOpmoS1lrIh/gFagsDhiFF1B1X9E2Rt5p3l16vUYfMxRYKs/WSxjAXovTpsycynoPxZcxiSWZbsHtb5nSa4SVvDWTsSp9rzL8vmY9SRkdkK78RRd9rI7MdlqltoNrMu0+gmbgY/Uxj0LSPVJVjVl0J+ohVfd0o4SOQFd1MaXk0XxZVqTfmw+o/4gtUKnYVqmIQkxwzB1s9FhUy6a1e75qGHLmcU0G71OIdmJypO///n367fvv9zy/dvX//bi8UMiX3i5svLrLD+F3aFl5uXKi1lWWNYcWBYAywJgWQAsC4BlAbAsAJYFwLIAWBYAywJgWQAsC4BlAbAsAJYFwLIAWBYAywJgWQAsC4BlAbAsgJc/u3ixdLL+B3BuoA7m4QDtAAAAAElFTkSuQmCC"
          alt="voice-search"
        />

        {showSuggestion && (
          <div className="absolute bg-white mt-11  p-2 cursor-pointer w-96 rounded-lg shadow-lg ">
            <ul>
              {searchResults.map((res) => (
                <li
                  onClick={() => getVideo(res)}
                  className="py-2 px-3 hover:bg-slate-400 shadow-sm"
                >
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
          className="h-16 -mt-2 w-10 md:w-auto"
        />
      </div>
    </div>
  );
};

export default Header;
