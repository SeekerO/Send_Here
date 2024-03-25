import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

import { PiLinkSimpleBreakBold } from "react-icons/pi";
import { FaImages } from "react-icons/fa";
import { PiFilesFill } from "react-icons/pi";

import { TbMessageCircleOff } from "react-icons/tb";
import { FaBellSlash } from "react-icons/fa";
import { MdOutlineBlock, MdOutlineReportProblem } from "react-icons/md";
const PrivacySupport = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <>
      <div onClick={() => setHidden(!hidden)} className="label-right-display">
        <label className="cursor-pointer">Media, file and links</label>
        <MdKeyboardArrowRight
          className={`${
            !hidden ? "rotate-90" : "rotate-0"
          } duration-300 label-icon-right-display`}
        />
      </div>

      <div hidden={hidden}>
        <div className="flex items-center gap-2 pl-4 hover:bg-slate-300 p-1 rounded-md cursor-pointer">
          <span className="bg-slate-100 p-1 rounded-full cursor-pointer">
            <FaBellSlash className="text-[15px] text-black" />
          </span>
          <label className="font-semibold cursor-pointer">
            Mute Notifications
          </label>
        </div>
        <div className="flex items-center gap-2 pl-4 hover:bg-slate-300 p-1 rounded-md cursor-pointer">
          <span className="bg-slate-100 p-1 rounded-full cursor-pointer">
            <TbMessageCircleOff className="text-[15px] text-black" />
          </span>
          <label className="font-semibold cursor-pointer">Restrict</label>
        </div>
        <div className="flex items-center gap-2 pl-4 hover:bg-slate-300 p-1 rounded-md cursor-pointer">
          <span className="bg-slate-100 p-1 rounded-full cursor-pointer">
            <MdOutlineBlock className="text-[15px] text-black" />
          </span>
          <label className="font-semibold cursor-pointer">Block</label>
        </div>
        <div className="flex items-center gap-2 pl-4 hover:bg-slate-300 p-1 rounded-md cursor-pointer">
          <span className="bg-slate-100 p-1 rounded-full cursor-pointer">
            <MdOutlineReportProblem className="text-[15px] text-black" />
          </span>
          <label className="cursor-pointer flex-col flex items justify-center">
            <span className="font-semibold">Report</span>{" "}
            <em className="text-[12px]">
              Give feedback and report the conversation
            </em>
          </label>
        </div>
      </div>
    </>
  );
};

export default PrivacySupport;
