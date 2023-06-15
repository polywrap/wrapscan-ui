import { sampleGraphql } from "./sample-graphql";
import WrapInformationWidget from "@/components/wrap/wrap-information-widget";
import { getWrapManifest } from "@/utils/getWrapManifest";
import { use } from "react";
import WrapSchemaRenderer from "@/components/wrap/wrap-schema-renderer";

export default function Schema({ params }: { params: { wrapUri: string } }) {
  const {wrapUri} = params;

  // TODO: Replace this with getWrapSchema
  const result = use(getWrapManifest(wrapUri));
  
  return (
    <div className="flex gap-12">
      {result.name}
      <WrapSchemaRenderer schema={sampleGraphql}></WrapSchemaRenderer>
      <div className="shrink-0 grow-0 basis-80">
        <WrapInformationWidget></WrapInformationWidget>
      </div>
    </div>
  );
}
