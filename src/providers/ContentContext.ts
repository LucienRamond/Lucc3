import { createContext } from "react";

export type ContentProps = {
  company_name: string;
  company_description: string;
  navbar_alignment: string;
  company_text: string;
};

interface ContextProps {
  content: ContentProps;
  editContent: (arg0: ContentProps) => void;
}

export const ContentContext = createContext<ContextProps>({
  content: {
    company_name: "Lucc3",
    company_description: "Développeur de site internet",
    navbar_alignment: "justify-start",
    company_text: "Décrivez ici votre entreprise",
  },
  editContent: () => {},
});
