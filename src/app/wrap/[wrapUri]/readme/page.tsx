import ReactMarkdown from "react-markdown";
import { readme } from "./readme";
import WrapInformationWidget from "@/components/wrap/wrap-information-widget";
import { getDocsManifest } from "@/utils/getDocsManifest";
import { decodeWrapUri } from "@/utils/wrapUri";
import { getWrapFile } from "@/utils/getWrapFile";

// Tailwind has a really nice base typography style which can be activated with the `prose` class
// We can provide our own typography styling by simply editing the typography plugin:
// https://tailwindcss.com/docs/typography-plugin

export default async function Readme({
  params,
}: {
  params: { wrapUri: string };
}) {
  const wrapUriDecoded = decodeWrapUri(params.wrapUri);

  const docsManifest = await getDocsManifest(wrapUriDecoded);
  console.log(docsManifest);
  if (
    !docsManifest ||
    !docsManifest.homePage ||
    !docsManifest.pages
  ) {
    return <div>No readme found</div>;
  }

  const readme = await getWrapFile(
    wrapUriDecoded,
    "docs/" + docsManifest.pages[docsManifest.homePage].path
  );

  if (!readme) {
    return <div>No readme found</div>;
  }

  return (
    <div className="flex gap-12">
      <div className="grow">
        <ReactMarkdown className="prose prose-invert max-w-none">
          {readme}
        </ReactMarkdown>
      </div>
      <div className="shrink-0 grow-0 basis-80">
        <WrapInformationWidget></WrapInformationWidget>
      </div>
    </div>
  );
}
