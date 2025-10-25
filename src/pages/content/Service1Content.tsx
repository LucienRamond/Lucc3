import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ContentProps } from "@/providers/ContentContext";

export default function Service1Content({
  content,
  editContent,
}: {
  content: ContentProps;
  editContent: (new_content: ContentProps) => void;
}) {
  return (
    <>
      <div className=" grid gap-2">
        <Label htmlFor="service_1_name">Nom du service</Label>
        <Input
          onChange={(e) =>
            editContent({ ...content, service_1_name: e.target.value })
          }
          type="text"
          placeholder={content.service_1_name}
          value={content.service_1_name}
          id="service_1_name"
        />
      </div>
      <div className=" grid gap-2">
        <Label htmlFor="service_1_description">Meta description (menu)</Label>
        <Input
          onChange={(e) =>
            editContent({ ...content, service_1_description: e.target.value })
          }
          type="text"
          placeholder={content.service_1_description}
          value={content.service_1_description}
          id="service_1_description"
        />
      </div>
      <div className=" grid gap-2">
        <Label htmlFor="service_1_text">Description du service</Label>
        <Textarea
          onChange={(e) =>
            editContent({ ...content, service_1_text: e.target.value })
          }
          placeholder={content.service_1_text}
          value={content.service_1_text}
          id="service_1_text"
        />
      </div>
    </>
  );
}
