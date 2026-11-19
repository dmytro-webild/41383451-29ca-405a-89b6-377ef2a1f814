import ContactFunnel from "./ContactFunnel";

type ContactUnderlineFormProps = {
  className?: string;
};

export default function ContactUnderlineForm({ className }: ContactUnderlineFormProps) {
  return <ContactFunnel className={className} />;
}
