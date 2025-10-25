import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ContentProps } from "@/providers/ContentContext";

export default function Service2Content({
  content,
  editContent,
}: {
  content: ContentProps;
  editContent: (new_content: ContentProps) => void;
}) {
  return (
    <>
      <div className=" grid gap-2">
        <Label htmlFor="service_2_name">Nom du service</Label>
        <Input
          onChange={(e) =>
            editContent({ ...content, service_2_name: e.target.value })
          }
          type="text"
          placeholder={content.service_2_name}
          value={content.service_2_name}
          id="service_2_name"
        />
      </div>
      <div className=" grid gap-2">
        <Label htmlFor="service_2_description">Meta description (menu)</Label>
        <Input
          onChange={(e) =>
            editContent({ ...content, service_2_description: e.target.value })
          }
          type="text"
          placeholder={content.service_2_description}
          value={content.service_2_description}
          id="service_2_description"
        />
      </div>
      <div className=" grid gap-2">
        <Label htmlFor="service_2_text">Description du service</Label>
        <Textarea
          onChange={(e) =>
            editContent({ ...content, service_2_text: e.target.value })
          }
          placeholder={content.service_2_text}
          value={content.service_2_text}
          id="service_2_text"
        />
      </div>
    </>
  );
}
