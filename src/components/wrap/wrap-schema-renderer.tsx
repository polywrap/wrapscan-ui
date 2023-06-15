"use client";

import { Prism } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const customVscDarkPlus: { [key: string]: React.CSSProperties } = {
  ...vscDarkPlus,
  ...{
    'code[class*="language-"]': { fontSize: 16 },
    'pre[class*="language-"]': { fontSize: 16 },
  },
};

export default function WrapSchemaRenderer({ schema }: { schema: string }) {
  return (
    <Prism
      language="graphql"
      style={customVscDarkPlus}
      wrapLines={true}
      wrapLongLines={true}
    >
      {schema}
    </Prism>
  );
}
