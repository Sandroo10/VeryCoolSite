import { supabase } from "..";


export type BlogsFilterValueTypes = {
    searchText: string;
}

export type Post = {
    created_at: string | null;
    description_en: string | null;
    description_ka: string | null;
    id: number;
    image_url: string | null;
    title_en: string | null;
    title_ka: string;
    user_id: string | null;
 }




export const getFilteredBlogsList = async (searchFormValues: BlogsFilterValueTypes): Promise<Post[]> => {
    const { data, error } = await supabase.from('blogs').select('*').ilike("title_en", `%${searchFormValues?.searchText}%`);
    if (error) {
        console.error('Error fetching blogs:', error.message);
        return [];
    }
    return data;
};