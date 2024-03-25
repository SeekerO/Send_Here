import React from "react";
import { FaFacebook, FaBell, FaSearch } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import ChatInfo from "./Chatinfo/ChatInfo";
import CustomizeChat from "./CustomizeChat/CustomizeChat";
import MediaAndLinks from "./Media/MediaAndLinks";
import PrivacySupport from "./Privacy/PrivacySupport";

const RightMessageDisplay = ({ openConversationInformation, getUserInfo }) => {
  if (!openConversationInformation) return null;

  return (
    <div
      className={`${
        openConversationInformation ? " w-[400px] h-full" : "w-[0px] h-full"
      }  transition-transform duration-300  bg-slate-200 p-1 overflow-y-auto`}
    >
      <div className="flex justify-center items-center flex-col mt-5">
        <div className="w-32 h-32 bg-white rounded-full" />
        <label className="text-center mt-1 normal-case">
          {getUserInfo.username}
        </label>
      </div>
      <div className="flex justify-center gap-9 mt-5">
        <a className="a-icon-right-display">
          <FaFacebook className="right-display-icon" />
          <span className="text-[12px]">Facebook</span>
        </a>
        <a className="a-icon-right-display">
          <FaBell className="right-display-icon" />
          <span className="text-[12px]">Mute</span>
        </a>
        <a className="a-icon-right-display">
          <FaSearch className="right-display-icon" />
          <span className="text-[12px]">Search</span>
        </a>
      </div>

      <div className="mt-4 ">
        <ChatInfo />
        <CustomizeChat />
        <MediaAndLinks />
        <PrivacySupport/>
      </div>
    </div>
  );
};

export default RightMessageDisplay;
