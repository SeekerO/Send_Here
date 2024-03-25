import supabase from "../../../config/SupabaseClient";

export const MessAddContacts = async (user, getUserInfo) => {
  var prevContacts = user.contacts;
  let newUser = { id: getUserInfo.id, username: getUserInfo.username };

  var currContact = getUserInfo.contacts;
  let currNewUser = { id: user.id, username: user.username };

  let user1 = prevContacts.find((user) => user.id === getUserInfo.id);

  if (user1) {
    return;
  } else {
    prevContacts.push(newUser);
    await supabase
      .from("UserAccounts")
      .update({ contacts: prevContacts })
      .eq("id", user.id)
      .select();

    currContact.push(currNewUser);
    await supabase
      .from("UserAccounts")
      .update({ contacts: currContact })
      .eq("id", getUserInfo.id)
      .select();
  }
};
