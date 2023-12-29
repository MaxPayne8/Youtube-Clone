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
      <ul className="flex ">
        <img
          className="w-10 h-10 mt-3 mr-1 rounded-full"
          alt="channel-icon "
          src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
        />
        <div>
          <li className="font-bold py-2">{title}</li>
          <li>{channelTitle}</li>
          {statistics?.viewCount ? (
            <li>{statistics?.viewCount} views</li>
          ) : null}
        </div>
      </ul>
    </div>
  );
};

export default VideoCard;
