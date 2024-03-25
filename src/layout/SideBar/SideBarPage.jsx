import React, { useEffect, useState } from "react";
import { BsChatSquareFill, BsPeopleFill, BsArchiveFill } from "react-icons/bs";
import { FaStoreAlt } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
const SideBarPage = ({ sideBarExpand, setBtnName }) => {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    setHide(!hide);
  }, [sideBarExpand]);

  const BtnNames = [
    {
      chats: "Chats",
    },
    { chats: "People" },
    { chats: "Marketplace" },
    { chats: "Requests" },
    { chats: "Archive" },
  ];

  const communitesData = [
    { title: "Test1" },
    { title: "Test2" },
    { title: "Test3" },
    { title: "Test4" },
    { title: "Test5" },
  ];

  const iconPlacement = (name) => {
    if (name === "Chats") return <BsChatSquareFill />;
    else if (name === "People") return <BsPeopleFill />;
    else if (name === "Marketplace") return <FaStoreAlt />;
    else if (name === "Requests") return <AiFillMessage />;
    else return <BsArchiveFill />;
  };
  return (
    <div className="w-full h-full flex flex-col p-1">
      {BtnNames.map((data) => (
        <div
          key={data.chats}
          onClick={() => setBtnName(data.chats)}
          className="flex items-center gap-2 w-full p-2 hover:bg-slate-300 focus:bg-slate-300 hover:text-black text-white cursor-pointer hover:shadow-md rounded-md"
        >
          <span className=" text-[24px]"> {iconPlacement(data.chats)}</span>

          <a hidden={hide} className=" font-semibold">
            {data.chats}
          </a>
        </div>
      ))}

      {hide ? (
        <div className="w-full h-[1px] bg-white mb-2 mt-2" />
      ) : (
        <label className="text-white p-1">Communities</label>
      )}

      {communitesData.map((data) => (
        <div
          key={data.title}
          className="flex gap-2 p-1 items-center hover:bg-slate-300"
        >
          <div className="w-8 h-8 bg-black rounded-md flex-nowrap"></div>
          <label hidden={hide}>{data.title}</label>
        </div>
      ))}
    </div>
  );
};

export default SideBarPage;
