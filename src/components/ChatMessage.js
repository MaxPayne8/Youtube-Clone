import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex bg-slate-200 mb-1 w-screen md:w-auto">
      <img
        className="w-8 h-8"
        src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg"
        alt="profile"
      />
      <div className="flex">
        <h1 className="font-bold">{name}:</h1>
        <h1 className="ml-2">{message}</h1>
      </div>
    </div>
  );
};

export default ChatMessage;
