import React, { Suspense, useEffect, useState } from "react";
import supabase from "../../../config/SupabaseClient";
import MessageCell from "./MessageCell";

function MessageUserDisplay({ user, getUserInfo }) {
  const [receivedMessage, setReceivedMessage] = useState();
  const [currUser, setCurrUser] = useState();
  useEffect(() => {
    const messageFetcher = async () => {
      const response = await supabase.from("Messages").select("*").match({
        MessageBy: user.id,
        Contactwith: getUserInfo.id,
      });

      const responseSelectedUsere = await supabase
        .from("Messages")
        .select("*")
        .match({
          MessageBy: getUserInfo.id,
          Contactwith: user.id,
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

  return (
    <div className="h-full w-full bg-slate-400 p-3 overflow-y-auto">
      <div className=" flex flex-col select-text ">
        {receivedMessage
          ? receivedMessage
              ?.sort((a, b) => (a.created_at <= b.created_at ? -1 : 1))
              .map((data) => (
                <div key={data.id}>
                  <MessageCell
                    data={data}
                    user={user}
                    getUserInfo={getUserInfo}
                    currUser={currUser}
                  />
                </div>
              ))
          : "Loading..."}
      </div>
    </div>
  );
}

export default MessageUserDisplay;
