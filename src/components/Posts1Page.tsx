import React from "react";
import { useTranslation } from "react-i18next";

const Post1Page: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{t("post1.title")}</h1>
      <p className="text-muted-foreground">{t("post1.intro")}</p>
      <div className="mt-6">
        <p>{t("post1.content")}</p>
      </div>
    </div>
  );
};

export default Post1Page;
