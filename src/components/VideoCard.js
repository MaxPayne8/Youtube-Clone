import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2  m-2 w-auto md:w-80  text-slate-200 hover:shadow-lg cursor-pointer rounded-lg  hover:shadow-slate-300">
      <img
        className="rounded-lg "
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        {statistics?.viewCount ? <li>{statistics?.viewCount} views</li> : null}
      </ul>
    </div>
  );
};

export default VideoCard;
