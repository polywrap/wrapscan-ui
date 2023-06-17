import ReactMarkdown from "react-markdown";
import WrapInformationWidget from "@/components/wrap/wrap-information-widget";
import { getDocsManifest } from "@/utils/getDocsManifest";
import { decodeWrapUri } from "@/utils/wrapUri";
import { getWrapFile } from "@/utils/getWrapFile";
import { getWrapManifest } from "@/utils/getWrapManifest";
import { defaultReadme } from "./default-readme";
import SyntaxHighlighter from "react-syntax-highlighter";
import { CodeProps } from "react-markdown/lib/ast-to-react";
import { irBlack as syntax } from "react-syntax-highlighter/dist/esm/styles/hljs";
import MarkdownRenderer from "./markdown-renderer";

// Tailwind has a really nice base typography style which can be activated with the `prose` class
// We can provide our own typography styling by simply editing the typography plugin:
// https://tailwindcss.com/docs/typography-plugin

export default async function Readme({
  params,
}: {
  params: { wrapUri: string };
}) {
  const wrapUriDecoded = decodeWrapUri(params.wrapUri);
  const wrapManifest = await getWrapManifest(wrapUriDecoded);
  const docsManifest = await getDocsManifest(wrapUriDecoded);

  let readme: string | undefined;

  if (docsManifest && docsManifest.readme) {
    readme = await getWrapFile(wrapUriDecoded, "docs/" + docsManifest?.readme);
  }

  return (
    <div className="flex justify-between gap-12">
      <div className="max-w-full overflow-hidden">
        <MarkdownRenderer readme={readme ?? defaultReadme}></MarkdownRenderer>
      </div>
      <div className="hidden shrink-0 grow-0 basis-80 md:block">
        <WrapInformationWidget
          url={wrapUriDecoded}
          version={wrapManifest.version}
          websiteUrl={docsManifest?.websiteUrl}
          repositoryUrl={docsManifest?.repositoryUrl}
        ></WrapInformationWidget>
      </div>
    </div>
  );
}
