import React from "react";
import { supabase } from "@/supabase";
import { useForm, Controller } from "react-hook-form";
import { useAuth } from "@/components/context/AuthContext"; // Updated import to use your auth context

type BlogPostValues = {
  title_ka: string;
  title_en: string;
  description_ka: string;
  description_en: string;
  image_url: File | null;
};

const defaultValues = {
  title_ka: "",
  title_en: "",
  description_ka: "",
  description_en: "",
  image_url: null,
};

const WritePage: React.FC = () => {
  const { user } = useAuth(); // Using your custom auth hook
  const [tags, setTags] = React.useState<string[]>([]);
  const [tagInput, setTagInput] = React.useState("");
  
  const { control, handleSubmit } = useForm<BlogPostValues>({
    defaultValues
  });

  const addTag = () => {
    if (tagInput.trim()) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const onSubmit = async (formValues: BlogPostValues) => {
    try {
      let imageUrl = null;
      
      if (formValues.image_file) {
        const { data, error } = await supabase.storage
          .from("blog_images")
          .upload(
            `${user?.id}-${Date.now()}-${formValues.image_file.name}`,
            formValues.image_file
          );
          
        if (error) throw error;
        imageUrl = data?.fullPath;
      }

      await supabase.from("blogs").insert({
        title_ka: formValues.title_ka,
        title_en: formValues.title_en,
        description_ka: formValues.description_ka,
        description_en: formValues.description_en,
        image_url,
        user_id: user?.id,
        created_at: new Date().toISOString()
      });

      if (error) throw error;
      
      console.log("Successfully created blog:", data);
      
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  return (
    <div className="bg-background">
      <div className="container mx-auto">
        <div className="rounded-xl border bg-card text-card-foreground shadow max-w-3xl mx-auto">
          <div className="flex flex-col space-y-1.5 p-4">
            <div className="tracking-tight text-2xl font-bold">Write a New Post</div>
          </div>
          <div className="p-4 pt-0">
            <form className="space-y-5 max-h-screen overflow-auto" onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Title
                </label>
                <Controller
                  control={control}
                  name="title"
                  render={({ field }) => (
                    <input
                      {...field}
                      className="flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
                      placeholder="Enter your post title"
                      required
                    />
                  )}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Content
                </label>
                <Controller
                  control={control}
                  name="content"
                  render={({ field }) => (
                    <textarea
                      {...field}
                      className="flex min-h-[50px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
                      placeholder="Write your post content here..."
                      rows={8}
                      required
                    />
                  )}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Cover Image
                </label>
                <Controller
                  control={control}
                  name="image_file"
                  render={({ field: { onChange } }) => (
                    <input
                      type="file"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        onChange(file);
                      }}
                      className="flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
                      accept="image/*"
                    />
                  )}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Tags
                </label>
                <div className="flex flex-col gap-2">
                  <div className="flex space-x-2">
                    <input
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      className="flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
                      placeholder="Add a tag"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          addTag();
                        }
                      }}
                    />
                    <button
                      type="button"
                      onClick={addTag}
                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 px-4 py-2"
                    >
                      Add
                    </button>
                  </div>
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-2 py-1 text-sm"
                        >
                          {tag}
                          <button
                            type="button"
                            onClick={() => removeTag(tag)}
                            className="text-primary hover:text-primary/70"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
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