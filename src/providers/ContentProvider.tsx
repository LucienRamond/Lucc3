import React, { useEffect, useState } from "react";
import { ContentContext, type ContentProps } from "./ContentContext";

interface Props {
  children?: React.ReactNode;
}

const ContentProvider: React.FC<Props> = ({ children }) => {
  const [content, setContent] = useState<ContentProps>({
    company_name: "Lucc3",
    company_description: "Développeur de site internet",
    navbar_alignment: "justify-start",
    company_text: "Décrivez ici votre entreprise",
  });

  function getContentFromLocalStorage() {
    const savedContent = localStorage.getItem("content");
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    } else {
      setContent({
        company_name: "Lucc3",
        company_description: "Développeur de site internet",
        navbar_alignment: "justify-start",
        company_text: "Décrivez ici votre entreprise",
      });
    }
  }

  useEffect(() => {
    getContentFromLocalStorage();
  }, []);

  function editContentHandler(newContent: ContentProps) {
    setContent(() => {
      localStorage.setItem("content", JSON.stringify(newContent));
      return newContent;
    });
  }

  return (
    <ContentContext.Provider
      value={{
        content: {
          company_name: content.company_name.toString(),
          company_description: content.company_description,
          navbar_alignment: content.navbar_alignment,
          company_text: content.company_text,
        },
        editContent: editContentHandler,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export default ContentProvider;
