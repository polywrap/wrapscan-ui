import { cache } from "react";
import {
  DocsManifest,
  deserializeDocsManifest,
} from "@polywrap/polywrap-manifest-types-js";
import { getWrapFile } from "./getWrapFile";

export const getDocsManifest = cache(
  async (wrapUri: string): Promise<DocsManifest | undefined> => {
    const docsManifest = await getWrapFile(wrapUri, "docs/polywrap.docs.json");

    if (docsManifest) {
      return deserializeDocsManifest(docsManifest);
    }

    return undefined;
  }
);
