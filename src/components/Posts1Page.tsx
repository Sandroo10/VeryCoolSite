import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabase";
import { useTranslation } from "react-i18next";

type BlogPost = {
  title_en: string | null;
  description_en: string | null;
  created_at: string | null;
  image_url: string | null;
};

const PostPage: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id || isNaN(Number(id))) {
        console.error("Invalid ID parameter");
        return;
      }
  
      try {
        const postId = Number(id); // Convert to number
        const { data, error } = await supabase
          .from("blogs")
          .select("title_en, description_en, created_at, image_url")
          .eq("id", postId)
          .single();
  
        if (error) throw error;
        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchPost();
  }, [id]);


  if (loading) return <div className="p-6">Loading...</div>;
  if (!post) return <div className="p-6">Post not found</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title_en}</h1>
      <p className="text-muted-foreground">{t("postPage.publishedOn")} {post.created_at}</p>
      {post.image_url && (
        <div className="mt-4">
          <img src={post.image_url} alt={post.title_en || "Post image"} className="w-full rounded-lg" />
        </div>
      )}
      <div className="mt-6">
        <p>{post.description_en}</p>
      </div>
    </div>
  );
};

export default PostPage;
