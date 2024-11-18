import React from "react";
import { useTranslation } from "react-i18next";

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center">
      <div className="max-w-2xl text-center p-8">
        <h1 className="text-3xl font-bold text-card-foreground mb-4">
          {t("aboutpage.title")}
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {t("aboutpage.paragraph1")}
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed mt-4">
          {t("aboutpage.paragraph2")}
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
