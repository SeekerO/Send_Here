import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoText } from "react-icons/io5";
import { MdEmojiEmotions } from "react-icons/md";
import { FaRegCircleDot } from "react-icons/fa6";

const CustomizeChat = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <>
      <div onClick={() => setHidden(!hidden)} className="label-right-display">
        <label className="cursor-pointer">Customize Chat</label>
        <MdKeyboardArrowRight className={`${!hidden ? "rotate-90" : "rotate-0"} duration-300 label-icon-right-display`} />
      </div>

      <div hidden={hidden}>
        <div className="flex items-center gap-2 pl-4 hover:bg-slate-300 p-1 rounded-md cursor-pointer">
          <span className="bg-slate-100 p-1 rounded-full cursor-pointer">
            <FaRegCircleDot className="text-[15px] text-blue-500" />
          </span>
          <label className="cursor-pointer">Change theme</label>
        </div>
        <div className="flex items-center gap-2 pl-4 hover:bg-slate-300 p-1 rounded-md cursor-pointer">
          <span className="bg-slate-100 p-1 rounded-full cursor-pointer">
            <MdEmojiEmotions className="text-[15px] text-yellow-500" />
          </span>
          <label className="cursor-pointer">Change emoji</label>
        </div>
        <div className="flex items-center gap-2 pl-4 hover:bg-slate-300 p-1 rounded-md cursor-pointer">
          <span className="bg-slate-100 p-1 rounded-full cursor-pointer">
            <IoText className="text-[15px]" />
          </span>
          <label className="cursor-pointer">Edit nicknames</label>
        </div>
      </div>
    </>
  );
};

export default CustomizeChat;
