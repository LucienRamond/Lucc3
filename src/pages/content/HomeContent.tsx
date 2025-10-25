import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { ContentProps } from "@/providers/ContentContext";

export default function HomeContent({
  content,
  editContent,
}: {
  content: ContentProps;
  editContent: (new_content: ContentProps) => void;
}) {
  return (
    <>
      <div className=" grid gap-2">
        <Label htmlFor="company_name">Nom de l'entreprise</Label>
        <Input
          onChange={(e) =>
            editContent({ ...content, company_name: e.target.value })
          }
          type="text"
          placeholder={content.company_name}
          value={content.company_name}
          id="company_name"
        />
      </div>
      <div className=" grid gap-2">
        <Label htmlFor="company_description">Slogan</Label>
        <Input
          onChange={(e) =>
            editContent({
              ...content,
              company_description: e.target.value,
            })
          }
          type="text"
          value={content.company_description}
          placeholder={content.company_description}
          id="company_description"
        />
      </div>
    </>
  );
}
