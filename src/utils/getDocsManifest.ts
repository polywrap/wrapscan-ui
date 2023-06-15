import { PolywrapClient, WrapErrorCode } from "@polywrap/client-js";
import { cache } from "react";
import {
  DocsManifest,
  deserializeDocsManifest,
} from "@polywrap/polywrap-manifest-types-js";
import { getPolywrapClient } from "./getPolywrapClient";

export const getDocsManifest = cache(
  async (wrapUri: string): Promise<DocsManifest | undefined> => {
    const client = new PolywrapClient();
    const client2 = getPolywrapClient();
    const docsManifestResult = await client.getFile(wrapUri, {
      path: "docs/polywrap.docs.json",
      encoding: "utf-8",
    });

    if (docsManifestResult.ok) {
      const docsManifestString = docsManifestResult.value.toString();

      return deserializeDocsManifest(docsManifestString);
    } else if (
      docsManifestResult.error?.code === WrapErrorCode.CLIENT_GET_FILE_ERROR
    ) {
      return undefined;
    }

    throw `Error while fetching docs manifest for ${wrapUri}:
${JSON.stringify(docsManifestResult.error)}`;
  }
);
