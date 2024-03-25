import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

import { PiLinkSimpleBreakBold } from "react-icons/pi";
import { FaImages } from "react-icons/fa";
import { PiFilesFill } from "react-icons/pi";
const MediaAndLinks = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <>
      <div onClick={() => setHidden(!hidden)} className="label-right-display">
        <label className="cursor-pointer">Media, file and links</label>
        <MdKeyboardArrowRight  className={`${!hidden ? "rotate-90" : "rotate-0"} duration-300 label-icon-right-display`} />
      </div>

      <div hidden={hidden}>
        <div className="flex items-center gap-2 pl-4 hover:bg-slate-300 p-1 rounded-md cursor-pointer">
          <span className="bg-slate-100 p-1 rounded-full cursor-pointer">
            <FaImages className="text-[15px] text-black" />
          </span>
          <label className="cursor-pointer">Media</label>
        </div>
        <div className="flex items-center gap-2 pl-4 hover:bg-slate-300 p-1 rounded-md cursor-pointer">
          <span className="bg-slate-100 p-1 rounded-full cursor-pointer">
            <PiFilesFill className="text-[15px] text-black" />
          </span>
          <label className="cursor-pointer">Files</label>
        </div>
        <div className="flex items-center gap-2 pl-4 hover:bg-slate-300 p-1 rounded-md cursor-pointer">
          <span className="bg-slate-100 p-1 rounded-full cursor-pointer">
            <PiLinkSimpleBreakBold className="text-[15px] text-black" />
          </span>
          <label className="cursor-pointer">Links</label>
        </div>
      </div>
    </>
  );
};

export default MediaAndLinks;
