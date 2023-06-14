"use client";

import { Prism } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { sampleGraphql } from "./sample-graphql";
import WrapInformationWidget from "@/components/wrap/wrap-information-widget";

const customVscDarkPlus: { [key: string]: React.CSSProperties } = {
  ...vscDarkPlus,
  ...{
    'code[class*="language-"]': { fontSize: 16 },
    'pre[class*="language-"]': { fontSize: 16 },
  },
};

export default function Schema() {
  return (
    <div className="flex gap-12">
      <Prism language="graphql" style={customVscDarkPlus} wrapLines={true} wrapLongLines={true}>
        {sampleGraphql}
      </Prism>
      <div className="shrink-0 grow-0 basis-80">
        <WrapInformationWidget></WrapInformationWidget>
      </div>
    </div>
  );
}
