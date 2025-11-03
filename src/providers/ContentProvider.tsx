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
    service_1_name: "Service 1",
    service_1_description: "Meta description",
    service_1_text: "Decription du service",
    service_2_name: "Service 2",
    service_2_description: "Meta description",
    service_2_text: "Decription du service",
    service_3_name: "Service 3",
    service_3_description: "Meta description",
    service_3_text: "Decription du service",
    service_number: 1,
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
        service_1_name: "Service 1",
        service_1_description: "Meta description",
        service_1_text: "Decription du service",
        service_2_name: "Service 2",
        service_2_description: "Meta description",
        service_2_text: "Decription du service",
        service_3_name: "Service 3",
        service_3_description: "Meta description",
        service_3_text: "Decription du service",
        service_number: 1,
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
          service_1_name: content.service_1_name,
          service_1_description: content.service_1_description,
          service_1_text: content.service_1_text,
          service_2_name: content.service_2_name,
          service_2_description: content.service_2_description,
          service_2_text: content.service_2_text,
          service_3_name: content.service_3_name,
          service_3_description: content.service_3_description,
          service_3_text: content.service_3_text,
          service_number: content.service_number,
        },
        editContent: editContentHandler,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export default ContentProvider;
