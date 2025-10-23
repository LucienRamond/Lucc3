import React, { useEffect, useState } from "react";
import { ContentContext, type ContentProps } from "./ContentContext";

interface Props {
  children?: React.ReactNode;
}

const ContentProvider: React.FC<Props> = ({ children }) => {
  const [content, setContent] = useState<ContentProps>({
    company_name: "Lucc3",
    company_description: "Développeur de site internet",
  });

  function getContentFromLocalStorage() {
    const savedContent = localStorage.getItem("content");
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    } else {
      setContent({
        company_name: "Lucc3",
        company_description: "Développeur de site internet",
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
        },
        editContent: editContentHandler,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export default ContentProvider;
