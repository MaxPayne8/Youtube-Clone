import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex bg-black text-slate-200 mb-2 border-1 border-slate-100   sm:w-auto">
      <img
        className="w-8 h-8 my-auto mr-1 rounded-full "
        src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
        alt="profile"
      />
      <div className="flex items-center ">
        <h1 className="font-bold ">{name}: </h1>
        <h1 className="ml-2">{message}</h1>
      </div>
    </div>
  );
};

export default ChatMessage;
