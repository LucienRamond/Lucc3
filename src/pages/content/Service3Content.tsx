import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ContentProps } from "@/providers/ContentContext";

export default function Service3Content({
  content,
  editContent,
}: {
  content: ContentProps;
  editContent: (new_content: ContentProps) => void;
}) {
  return (
    <>
      <div className=" grid gap-2">
        <Label htmlFor="service_3_name">Nom du service</Label>
        <Input
          onChange={(e) =>
            editContent({ ...content, service_3_name: e.target.value })
          }
          type="text"
          placeholder={content.service_3_name}
          value={content.service_3_name}
          id="service_3_name"
        />
      </div>
      <div className=" grid gap-2">
        <Label htmlFor="service_3_description">Meta description (menu)</Label>
        <Input
          onChange={(e) =>
            editContent({ ...content, service_3_description: e.target.value })
          }
          type="text"
          placeholder={content.service_3_description}
          value={content.service_3_description}
          id="service_3_description"
        />
      </div>
      <div className=" grid gap-2">
        <Label htmlFor="service_3_text">Description du service</Label>
        <Textarea
          onChange={(e) =>
            editContent({ ...content, service_3_text: e.target.value })
          }
          placeholder={content.service_3_text}
          value={content.service_3_text}
          id="service_3_text"
        />
      </div>
    </>
  );
}
