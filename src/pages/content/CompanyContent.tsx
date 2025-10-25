import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { ContentProps } from "@/providers/ContentContext";

export default function CompanyContent({
  content,
  editContent,
}: {
  content: ContentProps;
  editContent: (new_content: ContentProps) => void;
}) {
  return (
    <div className=" grid gap-2">
      <Label htmlFor="company_name">Description de l'entreprise</Label>
      <Textarea
        onChange={(e) =>
          editContent({ ...content, company_text: e.target.value })
        }
        placeholder={content.company_text}
        value={content.company_text}
        id="company_name"
      />
    </div>
  );
}
