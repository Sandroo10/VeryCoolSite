import { supabase } from "..";
import { FillProfileInfoPayload } from "./index.types";

export const fillProfileInfo = async (payload: FillProfileInfoPayload) => {
  const { data, error } = await supabase
    .from("profiles")
    .upsert(payload as any)
    .select("*") // Select the updated data
    .single(); // Assuming you're updating a single profile

  if (error) {
    throw new Error(error.message);
  }

  return data; // Return the updated profile data
};

export const getProfileInfo = async (id: string | number) => {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id)
    .single(); // Use .single() if expecting one result

  if (error) {
    console.error("Error fetching profile info:", error.message);
    throw new Error(error.message); // Optional: throw the error for higher-level handling
  }

  return data; // Return the profile data if successful
};
