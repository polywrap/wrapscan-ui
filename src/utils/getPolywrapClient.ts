import { ClientConfigBuilder, PolywrapClient } from "@polywrap/client-js";
import { cache } from "react";

export const getPolywrapClient = cache(async () => {
  const config = new ClientConfigBuilder()
    .removePackage("plugin/ethereum-provider@1.1.0")
    .removePackage("plugin/ethereum-provider@2.0.0")
    .build();

  const client = new PolywrapClient(config);

  return client;
});
