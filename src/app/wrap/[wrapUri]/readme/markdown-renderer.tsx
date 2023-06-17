"use client";

import ReactMarkdown from "react-markdown";
import { Prism } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const customVscDarkPlus: { [key: string]: React.CSSProperties } = {
  ...vscDarkPlus,
  ...{
    'code[class*="language-"]': {
      ...vscDarkPlus['code[class*="language-"]'],
      fontSize: 16,
    },
    'pre[class*="language-"]': {
      ...vscDarkPlus['pre[class*="language-"]'],
      fontSize: 16,
      marginTop: 0,
      marginBottom: 0,
    },
  },
};

export default function MarkdownRenderer({ readme }: { readme: string }) {
  return (
    <ReactMarkdown
      className="prose prose-invert max-w-full prose-pre:bg-none prose-pre:p-0"
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <Prism {...props} style={customVscDarkPlus} language={match[1]}>
              {String(children).replace(/\n$/, "")}
            </Prism>
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          );
        },
      }}
    >
      {readme}
    </ReactMarkdown>
  );
}
