import React, { useState } from "react";
import MessageUserDisplay from "./Message/MessageUserDisplay/MessageUserDisplay";
import MessageInput from "./Message/MessageInput/MessageInput";
import MessageHeaderDisplay from "./Message/MessageHeaderDisplay/MessageHeaderDisplay";

function MessageLayout({
  getUserInfo,
  user,
  setOpenConversationInformation,
  openConversationInformation,
}) {
  return (
    <div className="h-full w-full flex flex-col">
      <MessageHeaderDisplay
        getUserInfo={getUserInfo}
        setOpenConversationInformation={setOpenConversationInformation}
        openConversationInformation={openConversationInformation}
      />
      <MessageUserDisplay getUserInfo={getUserInfo} user={user} />
      <MessageInput getUserInfo={getUserInfo} user={user} />
    </div>
  );
}

export default MessageLayout;
