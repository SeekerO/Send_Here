export default function AccountsConfig({ data, setGetUserInfo, setSearch }) {
  const selectUser = () => {
    setGetUserInfo(data);
    setSearch("");
  };
  return (
    <>
      <div onClick={selectUser} className="p-1 gap-2 flex">
        <span className="bg-black h-[30px] w-[30px] rounded-full" />
        {data.username}
      </div>
    </>
  );
}
