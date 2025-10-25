import Page from "@/components/ui/page";
import { ContentContext } from "@/providers/ContentContext";
import { useContext } from "react";

export default function Business() {
  const { content } = useContext(ContentContext);

  return <Page title="Notre entreprise">{content.company_text}</Page>;
}
