import { fillProfileInfo } from "../../../supabase/account";
import { FillProfileInfoPayload } from "../../../supabase/account/index.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PROFILE_MUTATION_KEYS } from "./enum";




  
  
export const useFillProfile = (setIsEditing: (f: boolean) => void, isEditing:boolean) => {
   
    const queryClient = useQueryClient(); 

    return useMutation<
      void, // Updated to reflect the `void` return type of `mutationFn`
      Error,
      { id: string; values: FillProfileInfoPayload }
    >({
      mutationKey: [PROFILE_MUTATION_KEYS.PROFILE],
      mutationFn: fillProfileInfo, // Updated to use the void-returning function
      onSuccess: (_, { id }) => {
        setIsEditing(false);
        console.log(isEditing)
        console.log('Profile updated successfully!');
        queryClient.invalidateQueries({
            queryKey: ["profile", id],
            exact: true, // Ensures only the exact query is invalidated
          });
      },
      onError: (error: Error) => {
        console.error('Error creating user:', error);
      },
    });
  };
