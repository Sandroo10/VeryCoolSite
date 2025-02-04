import { getProfileInfo, SingleProfileData } from "../../../supabase/account";
import { useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { PROFILE_QUERY_KEYS } from "./enum";



export const useGetProfileInfo = <T>(
    {
      queryOptions,
    }: {
      queryOptions?: Omit<UseQueryOptions<SingleProfileData, Error, T>, "queryKey">;
    } = {},
    id:string | number
  ): UseQueryResult<T, Error> => {

    return useQuery<SingleProfileData, Error, T>({
      queryKey: [PROFILE_QUERY_KEYS.PROFILE, id],
      queryFn: () => {
        console.log(id)
        if (!id) {
          throw new Error("User ID is undefined");
        }
        return getProfileInfo(id);
      },
      ...queryOptions,
    });
  };