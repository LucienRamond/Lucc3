import Page from "@/components/ui/page";
import { ContentContext } from "@/providers/ContentContext";
import { useContext } from "react";

export default function Service3() {
  const { content } = useContext(ContentContext);

  return <Page title={content.service_3_name}>{content.service_3_text}</Page>;
}
