import { AuthError } from "@supabase/supabase-js";
import { supabase } from ".."


export const login = ({email, password}: {email:string, password:string}): Promise<void> => {
    return supabase.auth.signInWithPassword({ email, password }).then((res) => {
        if (
          res?.error &&
          res?.error?.status &&
          (res?.error?.status < 200 || res?.error?.status >= 300)
        ) {
          throw new Error("Auth");
        }
      });
    };

    export const register = ({email, password} :{ email:string; password:string;}): Promise<void> => {
        return supabase.auth.signUp({email, password})
          .then((res) => {
            if (res.error) {
              throw new Error(`Registration failed: ${res.error.message}`); 
            }
          });
      };


export const logout = (): Promise<{ error: AuthError | null }> => {
    return supabase.auth.signOut();
  };