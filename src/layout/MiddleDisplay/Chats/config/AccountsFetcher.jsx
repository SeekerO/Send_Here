import { useEffect } from "react";
import supabase from "../../../../config/SupabaseClient";
export default async function AccountsFetcher() {
  const { data: userAccounts } = await supabase.from("UserAccounts").select();
  return userAccounts;
}
