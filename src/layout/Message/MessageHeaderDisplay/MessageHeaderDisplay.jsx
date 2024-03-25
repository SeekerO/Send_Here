import React from "react";
import { TbDotsCircleHorizontal } from "react-icons/tb";
import { IoVideocam, IoCall } from "react-icons/io5";

function MessageHeaderDisplay({
  getUserInfo,
  setOpenConversationInformation,
  openConversationInformation,
}) {
  const onClickName = () => {
    setOpenConversationInformation(!openConversationInformation);
  };
  return (
    <div className="flex items-center justify-between bg-[#303c7f] p-1 text-white ">
      <div className="flex gap-1 p-1 items-center">
        <div className="w-[40px] h-[40px] bg-white rounded-full " />
        {getUserInfo.username}
      </div>
      <div className=" cursor-pointer flex gap-2 items-center">
        <a className="hover:text-blue-400 hover:bg-slate-500 p-2 rounded-full">
          <IoCall className="text-[20px]" />
        </a>
        <a className="hover:text-blue-400 hover:bg-slate-500 p-2 rounded-full">
          <IoVideocam className="text-[20px]" />
        </a>

        <a onClick={() => onClickName()} className="hover:text-blue-400">
          <TbDotsCircleHorizontal className="text-[25px]" />
        </a>
      </div>
    </div>
  );
}

export default MessageHeaderDisplay;
