import { supabase } from "..";
import { FillProfileInfoPayload } from "./index.types";

export const fillProfileInfo = async (payload: FillProfileInfoPayload) => {

    // Perform the upsert operation and wait for the response
    const { data, error } = await supabase
      .from("profiles")
      .upsert(payload as any) // Ensure payload is typed correctly
      .throwOnError(); // Ensure errors are thrown if any

    if (error) {
      throw new Error(error.message); // Throw an error if any occurs
    }

    return data; // Return the data from the upsert operation
};

export const getProfileInfo = (id:string | number) => {
     return supabase.from("profiles").select("*").eq("id",id);
}   