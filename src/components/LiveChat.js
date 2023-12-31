import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { addMessages } from "../utils/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import { generate, generateString } from "../utils/helper";

const LiveChat = () => {
  const [liveMsg, setLiveMsg] = useState("");
  const dispatch = useDispatch();
  const getMsg = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessages({
          name: generate(),
          message: generateString(),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="w-full">
      <div className="m-2 mx-4 border-2 border-slate-200    h-[395px] overflow-y-scroll flex flex-col-reverse">
        {getMsg.map((msg) => (
          <ChatMessage name={msg.name} message={msg.message} />
        ))}
      </div>

      <form
        className="flex "
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessages({ name: "Zatin Pandey", message: liveMsg }));
          setLiveMsg("");
        }}
      >
        <input
          type="text"
          className="border-2 border-black mt-1 ml-5 w-full rounded-lg p-1"
          placeholder="Chat as Zatin Pandey"
          value={liveMsg}
          onChange={(e) => {
            setLiveMsg(e.target.value);
          }}
        ></input>
        <button className="bg-green-600 rounded-lg p-1 ml-2 border-2 border-black ">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
