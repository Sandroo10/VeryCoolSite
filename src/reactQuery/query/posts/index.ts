import { getFilteredBlogsList, Post } from "../../../supabase/blogs";
import { useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { POST_QUERY_KEYS } from "./enum";






export const useGetBlogsList = ({
    queryOptions
  }: {
    queryOptions?: Omit<UseQueryOptions<Post[], Error, Post[]>, "queryKey">;
  } = {},debouncedSearchText: string): UseQueryResult<Post[], Error> => {
    return useQuery<Post[], Error,Post[]>({
        queryKey: [POST_QUERY_KEYS.LIST, debouncedSearchText],
        queryFn:() => getFilteredBlogsList({ searchText: debouncedSearchText }),
      ...queryOptions,
    });
  };