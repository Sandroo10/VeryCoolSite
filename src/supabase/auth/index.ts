import { supabase } from ".."

export const register = async ({ email, password }: { email: string; password: string }) => {
  console.log('Register Payload:', { email, password });
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) {
    console.error('Sign Up Error:', error);
  } else {
    console.log('Sign Up Success:', data);
  }
  return { data, error };
};


export const login = ({email, password}: {email:string, password:string}) => {
    return supabase.auth.signInWithPassword({email, password});
}