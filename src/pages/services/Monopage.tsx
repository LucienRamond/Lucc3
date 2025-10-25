import Page from "@/components/ui/page";
import { ContentContext } from "@/providers/ContentContext";
import { useContext } from "react";

export default function Monopage() {
  const { content } = useContext(ContentContext);

  return <Page title={content.service_1_name}>{content.service_1_text}</Page>;
}
