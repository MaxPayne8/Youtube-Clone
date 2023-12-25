import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2  m-2 w-auto md:w-80  text-slate-200 shadow-md hover:shadow-lg hover:shadow-blue-700  shadow-slate-300 cursor-pointer rounded-lg ">
      <img
        className="rounded-lg mx-auto"
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
