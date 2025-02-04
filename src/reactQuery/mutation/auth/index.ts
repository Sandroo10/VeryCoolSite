


import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login, logout, register } from "../../../supabase/auth";
import { AuthError } from "@supabase/supabase-js";
import { AUTH_MUTATION_KEYS } from "./enum";

export const useSignIn = () => {
  const navigate = useNavigate();

  return useMutation<void, Error, { email: string; password: string }>({
    mutationKey: [AUTH_MUTATION_KEYS.LOGIN],
    mutationFn: login,

    onSuccess: () => {
      navigate("/");
    },
    onError: (error: Error) => {
      console.error("Login failed:", error);
      throw error;
    },
  });
};


export const useSignUp = () => {
  
    return useMutation<void, Error, { email: string; password: string }>({
      mutationKey: [AUTH_MUTATION_KEYS.REGISTER],
      mutationFn: register,
  
      onError: (error: Error) => {
        console.error("Sign Up failed:", error);
        throw error;
      },
    });
  };





export const useSignOut = () => {
    const navigate = useNavigate();
  
    return useMutation<{ error: AuthError | null }, Error, void>({
      mutationKey: [AUTH_MUTATION_KEYS.LOGOUT],
      mutationFn: logout,
  
      onSuccess: () => {
        navigate("/");
      },
  
      onError: (error: Error) => {
        console.error("Logout failed:", error);
        throw error;
      },
    });
  };
  

// export const register = ({email, password}: {email:string, password:string}) => {
//     return supabase.auth.signUp({email, password});
// }

// export const login = ({email, password}: {email:string, password:string}) => {
//     return supabase.auth.signInWithPassword({email, password});
// }

// export const logout = () => {
//     return supabase.auth.signOut();
// }
