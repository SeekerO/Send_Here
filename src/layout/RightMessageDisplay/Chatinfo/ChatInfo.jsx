import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdPushPin } from "react-icons/md";
const ChatInfo = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <>
      <div onClick={() => setHidden(!hidden)} className="label-right-display">
        <label className="cursor-pointer">Chat Info</label>
        <MdKeyboardArrowRight
          className={`${!hidden ? "rotate-90" : "rotate-0"} duration-300 label-icon-right-display`}
        />
      </div>

      <div hidden={hidden}>
        <div className="flex items-center gap-2 pl-4 hover:bg-slate-300 p-1 rounded-md cursor-pointer">
          <span className="bg-slate-100 p-1 rounded-full cursor-pointer">
            <MdPushPin className="text-[15px]" />
          </span>
          <label className="cursor-pointer">View pinned Messages</label>
        </div>
      </div>
    </>
  );
};

export default ChatInfo;
