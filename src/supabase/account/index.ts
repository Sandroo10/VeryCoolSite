import { supabase } from "..";
import { FillProfileInfoPayload } from "./index.types";

export const fillProfileInfo = async ({ values }: { id: string; values: FillProfileInfoPayload }): Promise<void> => {
  console.log(values);
  const { error } = await supabase
    .from("profiles")
    .upsert(values as any) // Use `values` instead of `payload`
    .select("*")
    .single();

  if (error) {
    throw new Error(error.message);
  }
};


export const getProfileInfo = async (id: string | number):Promise<SingleProfileData>  => {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id)
    .single(); 

  if (error) {
    console.error("Error fetching profile info:", error.message);
    throw new Error(error.message); 
  }

  return data; 
};


 export type SingleProfileData = {
    avatar_url: string | null;
    full_name_en: string | null;
    full_name_ka: string | null;
    id: string;
    updated_at: string | null;
    username: string | null;
}

export const mapProfileTableData = (data: SingleProfileData) => ({
  avatar_url: data.avatar_url || "",
  full_name_en: data.full_name_en || "",
  full_name_ka: data.full_name_ka || "",
  username: data.username || "",
});