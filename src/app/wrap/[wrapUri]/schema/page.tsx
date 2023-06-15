import WrapInformationWidget from "@/components/wrap/wrap-information-widget";
import { getWrapManifest } from "@/utils/getWrapManifest";
import { use } from "react";
import WrapSchemaRenderer from "@/components/wrap/wrap-schema-renderer";
import { decodeWrapUri } from "@/utils/wrapUri";
import { renderSchema } from "@polywrap/schema-compose";

export default function Schema({ params }: { params: { wrapUri: string } }) {
  const { wrapUri } = params;
  const wrapUriDecoded = decodeWrapUri(wrapUri);

  const result = use(getWrapManifest(wrapUriDecoded));

  const schema = renderSchema(result.abi, false);

  return (
    <div className="flex gap-12">
      <div className="grow">
        <WrapSchemaRenderer schema={schema.trimStart()}></WrapSchemaRenderer>
      </div>
      <div className="shrink-0 grow-0 basis-80">
        <WrapInformationWidget></WrapInformationWidget>
      </div>
    </div>
  );
}
