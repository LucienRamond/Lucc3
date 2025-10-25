import { createContext } from "react";

export type ContentProps = {
  company_name: string;
  company_description: string;
  navbar_alignment: string;
  company_text: string;
  service_1_name: string;
  service_1_description: string;
  service_1_text: string;
  service_2_name: string;
  service_2_description: string;
  service_2_text: string;
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
    service_1_name: "Service 1",
    service_1_description: "Voici le service 1",
    service_1_text: "Decrivez ici le service 1",
    service_2_name: "Service 2",
    service_2_description: "Voici le service 2",
    service_2_text: "Decrivez ici le service 2",
  },
  editContent: () => {},
});
