import { supabase } from "..";
import { FillProfileInfoPayload } from "./index.types";

export const fillProfileInfo = async (payload: FillProfileInfoPayload) => {

    const { data, error } = await supabase
      .from("profiles")
      .upsert(payload as any) 
      .throwOnError(); 

    if (error) {
      throw new Error(error.message); 
    }

    return data; 
};

export const getProfileInfo = (id:string | number) => {
     return supabase.from("profiles").select("*").eq("id",id);
}   