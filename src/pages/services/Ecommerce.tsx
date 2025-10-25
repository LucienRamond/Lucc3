import Page from "@/components/ui/page";
import { ContentContext } from "@/providers/ContentContext";
import { useContext } from "react";

export default function Ecommerce() {
  const { content } = useContext(ContentContext);

  return <Page title={content.service_2_name}>{content.service_2_text}</Page>;
}
