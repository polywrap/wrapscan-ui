import WrapInformationWidget from "@/components/wrap/wrap-information-widget";
import { getWrapManifest } from "@/utils/getWrapManifest";
import WrapSchemaRenderer from "@/components/wrap/wrap-schema-renderer";
import { decodeWrapUri } from "@/utils/wrapUri";
import { renderSchema } from "@polywrap/schema-compose";
import { getDocsManifest } from "@/utils/getDocsManifest";

export default async function Schema({
  params,
}: {
  params: { wrapUri: string };
}) {
  const { wrapUri } = params;
  const wrapUriDecoded = decodeWrapUri(wrapUri);

  const wrapManifest = await getWrapManifest(wrapUriDecoded);
  const docsManifest = await getDocsManifest(wrapUriDecoded);

  const schema = renderSchema(wrapManifest.abi, false);

  return (
    <div className="flex gap-12">
      <div className="grow">
        <WrapSchemaRenderer schema={schema.trimStart()}></WrapSchemaRenderer>
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
