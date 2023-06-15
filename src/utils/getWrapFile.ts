import { PolywrapClient, WrapErrorCode } from "@polywrap/client-js";
import { cache } from "react";

export const getWrapFile = cache(async (wrapUri: string, path: string) => {
  const client = new PolywrapClient();
  const fileResult = await client.getFile(wrapUri, {
    path: path,
    encoding: "utf-8",
  });

  if (fileResult.ok) {
    const resultString = fileResult.value.toString();

    return resultString;
  } else if (fileResult.error?.code === WrapErrorCode.CLIENT_GET_FILE_ERROR) {
    // undefined when there's no file
    return undefined;
  }

  throw `Error while fetching file for ${wrapUri}:
${JSON.stringify(fileResult.error)}`;
});
