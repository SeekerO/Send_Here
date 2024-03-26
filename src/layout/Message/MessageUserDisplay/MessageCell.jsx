import React from "react";
import moment from "moment";
import { MessDecryption } from "./MessDecryption";

const MessageCell = ({ data, user, getUserInfo, currUser }) => {
  if (data.MessageBy === user.id && data.Contactwith === getUserInfo.id) {
    return (
      <div className="flex justify-end">
        <div className="bg-slate-100 w-fit max-w-[400px] rounded-md flex flex-col mt-2 py-1 px-2">
          <label className="w-full text-right cursor-text">
            {MessDecryption(data.Message, user.uuid)}
          </label>
          <label className="w-full font-thin text-[9px] text-left mt-1 select-none">
            {moment(data.created_at).calendar()}
          </label>
        </div>
      </div>
    );
  }

  if (data.MessageBy === getUserInfo.id && data.Contactwith === user.id) {
    return (
      <div className="bg-slate-100 w-fit max-w-[400px] rounded-md flex flex-col mt-2 py-1 px-2">
        <label className="w-full text-left cursor-text">
          {MessDecryption(data.Message, currUser.uuid)}
        </label>
        <label className="w-full font-thin text-[9px] text-right mt-1 select-none">
          {moment(data.created_at).calendar()}
        </label>
      </div>
    );
  }
};

export default MessageCell;
