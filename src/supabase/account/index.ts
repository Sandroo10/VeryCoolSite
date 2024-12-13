import { supabase } from "..";
import { FillProfileInfoPayload } from "./index.types";

export const fillProfileInfo = async (payload: FillProfileInfoPayload) => {
  const { data, error } = await supabase
    .from("profiles")
    .upsert(payload as any)
    .select("*") 
    .single(); 

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getProfileInfo = async (id: string | number) => {
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
