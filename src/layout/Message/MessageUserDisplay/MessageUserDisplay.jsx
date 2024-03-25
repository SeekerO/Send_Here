import React, { Suspense, useEffect, useState } from "react";
import supabase from "../../../config/SupabaseClient";
import { useScroll } from "framer-motion";
import moment from "moment";
import { MessDecryption } from "./MessDecryption";
function MessageUserDisplay({ user, getUserInfo }) {
  const [receivedMessage, setReceivedMessage] = useState();
  const [currUser, setCurrUser] = useState();
  useEffect(() => {
    const messageFetcher = async () => {
      const response = await supabase.from("Messages").select("*").match({
        MessageBy: user.username,
        Contactwith: getUserInfo.username,
      });

      const responseSelectedUsere = await supabase
        .from("Messages")
        .select("*")
        .match({
          MessageBy: getUserInfo.username,
          Contactwith: user.username,
        });

      const getCurrUser = await supabase
        .from("UserAccounts")
        .select()
        .match({ id: getUserInfo.id, username: getUserInfo.username });

      setCurrUser(getCurrUser.data[0]);
      setReceivedMessage(response.data.concat(responseSelectedUsere.data));
    };
    messageFetcher();

    supabase
      .channel("custom-insert-channel")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "Messages" },
        (payload) => {
          messageFetcher();
        }
      )
      .subscribe();
  }, [getUserInfo]);

  const message = (data) => {
    console.log(getUserInfo);
    if (
      data.MessageBy === user.username &&
      data.Contactwith === getUserInfo.username
    ) {
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

    if (
      data.MessageBy === getUserInfo.username &&
      data.Contactwith === user.username
    ) {
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
  return (
    <div className="h-full w-full bg-slate-400 p-3 overflow-y-auto">
      <div className=" flex flex-col select-text ">
        {receivedMessage
          ? receivedMessage
              ?.sort((a, b) => (a.created_at <= b.created_at ? -1 : 1))
              .map((data) => <div key={data.id}>{message(data)}</div>)
          : "Loading..."}
      </div>
    </div>
  );
}

export default MessageUserDisplay;
