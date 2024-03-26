import React, { useEffect, useLayoutEffect, useState } from "react";
import ContactsConfig from "./config/ContactsConfig";
import AccountsFetcher from "./config/AccountsFetcher";
import AccountsConfig from "./config/AccountsConfig";
import supabase from "../../../config/SupabaseClient";
const Messages = ({ setGetUserInfo, user }) => {
  const [accounts_META_DATA, setAccounts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAccounts();

    supabase
      .channel("custom-insert-channel")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "Messages" },
        (payload) => {
          console.log("Change received!", payload);
        }
      )
      .subscribe();
  }, []);

  const getAccounts = async () => {
    setAccounts(await AccountsFetcher());
  };

  return (
    <div className=" h-screen w-full">
      <div className=" bg-[#303c7f] h-screen w-full">
        <div className="flex flex-col justify-center items-center h-[15%] gap-1">
          <h1 className="text-white font-white font-bold text-[20px]">
            Messages
          </h1>

          <div className="flex justify-center  w-[90%]">
            <div className="w-full">
              <input
                type="search"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className=" w-full p-1 rounded-md text-center relative"
              />
              {search !== "" ? (
                <div className="bg-white min-h-auto max-h-[200px] w-[274px] absolute overflow-y-auto rounded-b-md">
                  {accounts_META_DATA
                    ?.filter((item) => {
                      const searchTerm = search.toLowerCase();
                      const username = item.username.toLowerCase();

                      return searchTerm && username.includes(searchTerm);
                    })
                    .map((data, index) => (
                      <AccountsConfig
                        data={data}
                        key={data.id}
                        setGetUserInfo={setGetUserInfo}
                        setSearch={setSearch}
                      />
                    ))}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className=" overflow-y-auto overflow-x-hidden w-full ">
          {user?.contacts.map((data, index) => (
            <ContactsConfig
              key={index}
              data={data}
              user={user}
              setGetUserInfo={setGetUserInfo}
            />
          ))}
        </div>

        {/* Contacts Display */}
      </div>
    </div>
  );
};

export default Messages;
