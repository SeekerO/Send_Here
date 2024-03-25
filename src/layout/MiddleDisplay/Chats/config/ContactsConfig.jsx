import React, { useEffect, useState } from "react";
import supabase from "../../../../config/SupabaseClient";
import { MessDecryption } from "../../../Message/MessageUserDisplay/MessDecryption";
import { ContactMessDecryp } from "./ContactMessDecryp";
function ContactsConfig({ data, setGetUserInfo, user }) {
  const [lastMess, setLastMess] = useState();

  const meta_data = data;
  useEffect(() => {
    Notification();
  }, []);

  const Notification = async () => {
    const meta_data_1 = await supabase
      .from("Messages")
      .select("*")
      .match({ Contactwith: data.id, MessageBy: user.id, Seen: false });

    const meta_data_2 = await supabase
      .from("Messages")
      .select("*")
      .match({ Contactwith: user.id, MessageBy: data.id, Seen: false });

    const combined_meta_data = meta_data_1.data.concat(meta_data_2.data);
    combined_meta_data.sort((a, b) => a.created_at - b.created_at);

    setLastMess(combined_meta_data[combined_meta_data.length - 1]);
  };
  return (
    <>
      {lastMess?.id && (
        <div
          onClick={() => setGetUserInfo(data)}
          className="flex items-center p-1 gap-1 bg-slate-300 w-full hover:border-2 hover:border-blue-400 cursor-pointer"
        >
          <div className="w-[40px] h-[40px] flex-nowrap bg-slate-500 rounded-full" />
          <div className="flex flex-col w-full">
            <div className="flex justify-between w-full items-center ">
              <label>{data.username}</label>
              <label className="font-thin text-[12px]">10:09pm</label>
            </div>
            <p className="font-thin text-[14px] text-nowrap truncate ... w-[250px]">
              {ContactMessDecryp(meta_data, user, lastMess)}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactsConfig;
