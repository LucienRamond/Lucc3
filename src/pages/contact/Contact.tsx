import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Page from "@/components/ui/page";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <Page
      style=" lg:w-[700px]! sm:w-[80%]! h-fit!  py-5!"
      title="Contactez-nous !"
    >
      <div className="mt-4">
        <form>
          <FieldGroup>
            <FieldSet>
              <FieldGroup>
                <Field
                  orientation={"horizontal"}
                  className=" grid grid-cols-2 "
                >
                  <div className=" grid gap-2">
                    <FieldLabel htmlFor="form-name">Nom</FieldLabel>
                    <Input id="form-name" placeholder="Albert" required />
                  </div>
                  <div className=" grid gap-2">
                    <FieldLabel htmlFor="form-firstname">Prénom</FieldLabel>
                    <Input id="form-firstname" placeholder="Michel" required />
                  </div>
                </Field>

                <Field>
                  <FieldLabel htmlFor="form-reason">Motif</FieldLabel>
                  <Select defaultValue="01">
                    <SelectTrigger id="form-reason">
                      <SelectValue placeholder="Demande d'informations" />
                    </SelectTrigger>
                    <SelectContent className=" bg-[var(--page-bg)]">
                      <SelectItem value="01">Demande d'informations</SelectItem>
                      <SelectItem value="02">Demande d'un devis</SelectItem>
                      <SelectItem value="03">Autre...</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              </FieldGroup>
            </FieldSet>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="form-message">Message</FieldLabel>
                  <Textarea
                    className=" resize-none h-[200px]"
                    id="form-message"
                    placeholder="Ecrivez ici votre message"
                  />
                </Field>
              </FieldGroup>
            </FieldSet>
            <Field>
              <Button
                type="submit"
                variant={"outline"}
                className=" cursor-pointer hover:bg-[var(--bg-color)]/25"
              >
                Envoyer
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </Page>
  );
}
