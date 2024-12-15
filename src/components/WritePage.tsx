import React from "react";
import { supabase } from "../supabase";
import { useForm, Controller } from "react-hook-form";
import { useAuth } from "../components/context/AuthContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate

type BlogPostValues = {
  title_ka: string;
  title_en: string;
  description_ka: string;
  description_en: string;
  image_url: File | null;
  created_at: string | null;
};

const defaultValues = {
  title_ka: "",
  title_en: "",
  description_ka: "",
  description_en: "",
  image_url: null,
  created_at: "",
};

const WritePage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate(); // Initialize useNavigate

  const { control, handleSubmit } = useForm<BlogPostValues>({
    defaultValues,
  });

  const onSubmit = async (formValues: BlogPostValues) => {
    try {
      let imageUrl: string | null = null;

      if (formValues.image_url) {
        const { data, error } = await supabase.storage
          .from("blog_images")
          .upload(
            `${user?.id}-${Date.now()}-${formValues.image_url.name}`,
            formValues.image_url
          );

        if (error) throw error;
        imageUrl = data?.path || null;
      }

      const { error: insertError } = await supabase.from("blogs").insert({
        title_ka: formValues.title_ka,
        title_en: formValues.title_en,
        description_ka: formValues.description_ka,
        description_en: formValues.description_en,
        image_url: imageUrl,
        user_id: user?.id,
        created_at: new Date().toISOString(),
      });

      if (insertError) throw insertError;

      console.log("Successfully created blog post");
      navigate("/"); // Redirect to home page
    } catch (error) {
      console.error("Error creating blog post:", error);
    }
  };

  return (
    <div className="bg-background mt-8">
      <div className="container mx-auto">
        <div className="rounded-xl border bg-card text-card-foreground shadow max-w-3xl mx-auto">
          <div className="flex flex-col space-y-1.5 p-4">
            <div className="tracking-tight text-2xl font-bold">Write a New Post</div>
          </div>
          <div className="p-4 pt-0">
            <form className="space-y-5 max-h-screen overflow-auto" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Title (English)
                </label>
                <Controller
                  control={control}
                  name="title_en"
                  render={({ field }) => (
                    <input
                      {...field}
                      className="flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
                      placeholder="Enter your post title in English"
                      required
                    />
                  )}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Title (Georgian)
                </label>
                <Controller
                  control={control}
                  name="title_ka"
                  render={({ field }) => (
                    <input
                      {...field}
                      className="flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
                      placeholder="Enter your post title in Georgian"
                      required
                    />
                  )}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Content (English)
                </label>
                <Controller
                  control={control}
                  name="description_en"
                  render={({ field }) => (
                    <textarea
                      {...field}
                      className="flex min-h-[50px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
                      placeholder="Write your post content in English..."
                      rows={8}
                      required
                    />
                  )}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Content (Georgian)
                </label>
                <Controller
                  control={control}
                  name="description_ka"
                  render={({ field }) => (
                    <textarea
                      {...field}
                      className="flex min-h-[50px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
                      placeholder="Write your post content in Georgian..."
                      rows={8}
                      required
                    />
                  )}
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full"
              >
                Publish Post
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WritePage;
