import ReactMarkdown from "react-markdown";
import WrapInformationWidget from "@/components/wrap/wrap-information-widget";
import { getDocsManifest } from "@/utils/getDocsManifest";
import { decodeWrapUri } from "@/utils/wrapUri";
import { getWrapFile } from "@/utils/getWrapFile";
import { getWrapManifest } from "@/utils/getWrapManifest";
import { defaultReadme } from "./default-readme";

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
    <div className="flex gap-12">
      <div className="grow">
        <ReactMarkdown className="prose prose-invert max-w-none">
          {readme ?? defaultReadme}
        </ReactMarkdown>
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
