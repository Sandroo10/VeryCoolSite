import React from "react";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"


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
        <div className="mt-11">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="bg-black text-white dark:bg-white dark:text-black">
                Is it accessible?
              </AccordionTrigger>
            <AccordionContent className="bg-black text-white dark:bg-white dark:text-black">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="bg-black text-white dark:bg-white dark:text-black">
                Is it Cool?
              </AccordionTrigger>
            <AccordionContent className="bg-black text-white dark:bg-white dark:text-black">
              Yes. Very much.
            </AccordionContent>
          </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="bg-black text-white dark:bg-white dark:text-black">
                Are Joni and Nika goated?
              </AccordionTrigger>
            <AccordionContent className="bg-black text-white dark:bg-white dark:text-black">
              Yes. They truly are.
            </AccordionContent>
          </AccordionItem>
          </Accordion>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
