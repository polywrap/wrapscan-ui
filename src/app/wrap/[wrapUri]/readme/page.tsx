import ReactMarkdown from "react-markdown";
import { readme } from "./readme";
import WrapInformationWidget from "@/components/wrap/wrap-information-widget";

// Tailwind has a really nice base typography style which can be activated with the `prose` class
// We can provide our own typography styling by simply editing the typography plugin:
// https://tailwindcss.com/docs/typography-plugin

export default function Readme() {
  return (
    <div className="flex gap-12">
      <ReactMarkdown className="prose prose-invert max-w-none">
        {readme}
      </ReactMarkdown>
      <div className="shrink-0 grow-0 basis-80">
        <WrapInformationWidget></WrapInformationWidget>
      </div>
    </div>
  );
}
