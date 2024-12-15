import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Naruto from "../assets/naruto.jfif";
import Ichigo from "../assets/Ichigo.jfif";
import Luffy from "../assets/Luffy.png";
import { supabase } from "../supabase";

type BlogPost = {
  id: number;
  title_en: string | null;
  title_ka: string | null;
  description_en: string | null;
  description_ka: string | null;
  image_url: string | null;
  user_id: string | null;
  created_at: string | null;
};

const MainPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("blogs")
          .select("*")
          .order("created_at", { ascending: false });

        if (error) throw error;
        setBlogs(data || []);
      } catch (err) {
        setError("Failed to fetch blogs");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  const isGeorgian = i18n.language === "ka";


  return (
    <main className="px-4 py-8 flex-grow">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
      <section className="md:w-2/3 space-y-8 flex flex-col">
          {blogs.map((blog) => (
            <Link key={blog.id} to={`/posts/${blog.id}`}>
              <div className="rounded-xl border bg-card text-card-foreground shadow">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="mb-4">
                    <img
                      src={blog.image_url || "https://via.placeholder.com/400x200"}
                      alt={t("mainPage.coverImageAlt")}
                      className="rounded-lg object-cover w-full h-[200px]"
                    />
                  </div>
                  <div className="tracking-tight text-2xl font-bold">
                    {isGeorgian ? blog.title_ka || "Untitled" : blog.title_en || "Untitled"}
                  </div>
                  <p className="text-muted-foreground">
                    {isGeorgian
                      ? (blog.description_ka || "No description available").slice(0, 150)
                      : (blog.description_en || "No description available").slice(0, 150)}
                    ...
                  </p>
                  <Link to={`/author/${blog.user_id || "unknown"}`}>
                    {blog.user_id ? t("mainPage.author") : "Unknown Author"}
                  </Link>
                  <span>{blog.created_at ? new Date(blog.created_at).toLocaleDateString() : "Unknown Date"}</span>
                </div>
                <div className="flex items-center p-6 pt-0">
                  <div className="flex space-x-2">
                    <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                      {t("mainPage.tags.blockchain")}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>
        <aside className="md:w-1/3 space-y-8">
          <div className="rounded-xl border bg-card text-card-foreground shadow">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="font-semibold leading-none tracking-tight">{t("mainPage.popularTags")}</div>
            </div>
            <div className="p-6 pt-0">
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                  {t("mainPage.tags.blockchain")}
                </div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                  {t("mainPage.tags.cryptocurrency")}
                </div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                  {t("mainPage.tags.technology")}
                </div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                  {t("mainPage.tags.programming")}
                </div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                  {t("mainPage.tags.ai")}
                </div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                  {t("mainPage.tags.machineLearning")}
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl border bg-card text-card-foreground shadow">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="font-semibold leading-none tracking-tight">{t("mainPage.teamMembers.title")}</div>
              <div className="text-sm text-muted-foreground">
                {t("mainPage.teamMembers.inviteText")}
              </div>
            </div>
            <div className="p-6 pt-0 grid gap-6">
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <span className="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8">
                    <img
                      className="aspect-square h-full w-full"
                      alt="Ichigo"
                      src={Ichigo}
                    />
                  </span>
                  <div>
                    <p className="text-sm font-medium leading-none">Ichigo Kurosaki</p>
                    <p className="text-sm text-muted-foreground">Ban Kai!</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <span className="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8">
                    <img
                      className="aspect-square h-full w-full"
                      alt="Naruto"
                      src={Naruto}
                    />
                  </span>
                  <div>
                    <p className="text-sm font-medium leading-none">Naruto Uzumaki</p>
                    <p className="text-sm text-muted-foreground">Hokage Dattebayo</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <span className="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8">
                    <img
                      className="aspect-square h-full w-full"
                      alt="Luffy"
                      src={Luffy}
                    />
                  </span>
                  <div>
                    <p className="text-sm font-medium leading-none">Monkey D Luffy</p>
                    <p className="text-sm text-muted-foreground">Gear 5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default MainPage;
