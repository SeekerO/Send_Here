import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import MessageLayout from "../MessageLayout";
import Settings from "../SideBar/Settings";
import { motion } from "framer-motion";

import { PiSlideshow } from "react-icons/pi";

import SideBarPage from "../SideBar/SideBarPage";
import RightMessageDisplay from "../RightMessageDisplay/RightMessageDisplay";
import Messages from "../MiddleDisplay/Chats/Messages";
import { Routes, Route, Navigate } from "react-router-dom";
import People from "../MiddleDisplay/People/People";
import Marketplace from "../MiddleDisplay/Marketplace/Marketplace";
function Messaging({ user }) {
  const [entry, setEntry] = useState(false);
  const [getUserInfo, setGetUserInfo] = useState([]);
  console.log(getUserInfo);
  const [openSettings, setOpenSettings] = useState(false);
  const [openConversationInformation, setOpenConversationInformation] =
    useState(false);
  const nav = useNavigate();
  const [sideBarExpand, setSideBarExpand] = useState(false);

  const [btnName, setBtnName] = useState("Chats");

  useEffect(() => {
    setTimeout(() => {
      setEntry(true);
    }, 2500);
  }, []);

  const Logout = () => {
    nav("/Login");
    window.localStorage.removeItem("key");
  };

  const middleDisplay = (btnName) => {
    if (btnName === "Chats")
      return (
        <div className="h-screen">
          <Messages setGetUserInfo={setGetUserInfo} user={user} />
        </div>
      );
    else if (btnName === "People") return <People />;
    else if (btnName === "Marketplace") return <Marketplace />;
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-[#535d98] via-[#303c7f] to-[#0b165a]">
      {!entry ? (
        <div className="h-full w-full items-center justify-center flex">
          SEND HERE
        </div>
      ) : (
        <div className="h-full w-full items-center justify-center flex select-none">
          <div
            className={`${
              sideBarExpand ? "w-[300px]  h-full" : "w-[50px] h-full"
            } flex flex-col duration-300`}
          >
            <div className="h-full">
              <SideBarPage
                sideBarExpand={sideBarExpand}
                setBtnName={setBtnName}
              />
            </div>

            <Settings
              setOpenSettings={setOpenSettings}
              openSettings={openSettings}
              Logout={Logout}
            />

            <div
              className={`${
                sideBarExpand ? " h-[50px] px-2" : " flex-col h-[100px] "
              } flex items-center justify-between w-full duration-300 `}
            >
              <div
                className="flex items-center w-[80%] p-1 cursor-pointer hover:text-black text-white hover:bg-slate-300 mb-1 rounded-md"
                onClick={() => setOpenSettings(!openSettings)}
              >
                <div
                  className={`${
                    sideBarExpand ? "w-[40px] h-[40px]" : "w-[32px] h-[32px]"
                  }  bg-black rounded-full cursor-pointer flex`}
                ></div>
                {sideBarExpand && (
                  <motion.em
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeIn", duration: 0.5 }}
                    className=" ml-2"
                  >
                    {user.username}
                  </motion.em>
                )}
              </div>

              <PiSlideshow
                onClick={() => setSideBarExpand(!sideBarExpand)}
                className="hover:bg-slate-300 hover:bg-opacity-30 text-white rounded-full w-[30px] h-[30px] p-1 cursor-pointer"
              />
            </div>
          </div>

          <div className="flex flex-col w-[20%] h-screen bg-slate-200">
            {middleDisplay(btnName)}
          </div>

          <div className="w-[80%] h-[100%] bg-[#00000078] flex">
            {getUserInfo.length !== 0 ? (
              <div className="w-full h-full bg-slate-300">
                <MessageLayout
                  getUserInfo={getUserInfo}
                  user={user}
                  setOpenConversationInformation={
                    setOpenConversationInformation
                  }
                  openConversationInformation={openConversationInformation}
                />
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white">
                Select a chat
              </div>
            )}
          </div>

          <RightMessageDisplay
            getUserInfo={getUserInfo}
            openConversationInformation={openConversationInformation}
          />
        </div>
      )}
    </div>
  );
}

export default Messaging;
