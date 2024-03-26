import React, { useEffect, useState } from "react";
import { MessDecryption } from "../../../Message/MessageUserDisplay/MessDecryption";
import supabase from "../../../../config/SupabaseClient";

const ContactMessDecryp = ({ meta_data, user, lastMess }) => {
  const [uuid, setuuid] = useState();
  useEffect(() => {
    Decryption();
  }, []);

  const Decryption = async () => {
    if (lastMess.MessageBy === user.id) {
      const user_meta_data = await supabase
        .from("UserAccounts")
        .select("*")
        .match({ id: user.id });

      setuuid(user_meta_data?.data[0].uuid);
    } else {
      const curr_meta_data = await supabase
        .from("UserAccounts")
        .select()
        .match({ id: meta_data.id });
      setuuid(curr_meta_data?.data[0].uuid);
    }
  };

  return (
    <span>
      {lastMess?.Message && uuid && MessDecryption(lastMess.Message, uuid)}
    </span>
  );
};

export default ContactMessDecryp;
