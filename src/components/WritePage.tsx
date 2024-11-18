import React from "react";

const WritePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background pt-20"> 
      <div className="container mx-auto">
        <div className="rounded-xl border bg-card text-card-foreground shadow max-w-3xl mx-auto">
          <div className="flex flex-col space-y-1.5 p-4"> 
            <div className="tracking-tight text-2xl font-bold">Write a New Post</div>
          </div>
          <div className="p-4 pt-0">
            <form className="space-y-5 max-h-screen overflow-auto">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  className="flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
                  id="title"
                  placeholder="Enter your post title"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="content"
                >
                  Content
                </label>
                <textarea
                  className="flex min-h-[50px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
                  id="content"
                  placeholder="Write your post content here..."
                  rows={8} 
                  required
                ></textarea>
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="cover-image"
                >
                  Cover Image
                </label>
                <input
                  type="file"
                  className="flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
                  id="cover-image"
                  accept="image/*"
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="tags"
                >
                  Tags
                </label>
                <div className="flex space-x-2">
                  <input
                    className="flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm"
                    id="tags"
                    placeholder="Add a tag"
                  />
                  <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 px-4 py-2"
                    type="button"
                  >
                    Add
                  </button>
                </div>
              </div>
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full"
                type="submit"
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
