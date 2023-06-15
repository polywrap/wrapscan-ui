import { PolywrapClient } from "@polywrap/client-js";
import { cache } from "react";

export const getWrapManifest = cache(async (wrapUri: string) => {
  const client = new PolywrapClient();
  const manifestResult = await client.getManifest(wrapUri);

  if (manifestResult.ok) {
    return manifestResult.value;
  }

  throw `Error while fetching wrap manifest for ${wrapUri}:
${JSON.stringify(manifestResult.error)}`;
});
