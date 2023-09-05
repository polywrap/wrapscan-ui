export type WrapHomepageItem = {
  name: string;
  description: string;
  uri: string;
  logoUrl?: string;
};

export const wraps: WrapHomepageItem[] = [
  {
    name: "ethers",
    description: "Interact with the Ethereum Blockchain",
    uri: "wrapscan.io/polywrap/ethers@1.1.1",
  },
  {
    name: "ens",
    description: "Purchase & configure domains on the Ethereum Name Service",
    uri: "wrapscan.io/polywrap/ens@1.0.0",
  },
  {
    name: "ipfs-http-client",
    description: "Client library for the IPFS HTTP API",
    uri: "wrapscan.io/polywrap/ipfs-http-client@1.0.1",
  },
  {
    name: "uniswap-v3",
    description:
      "Interact with the Uniswap V3 smart contracts in any environment",
    uri: "ipfs/QmUGTMYE1upBBFGh4TLMDR6BKWK3TtPLMdzAiuLdUeQYVD",
  },
  {
    name: "safe-account-abstraction-kit",
    description: "Add Safe account abstraction into any application",
    uri: "wrapscan.io/polywrap/safe-account-abstraction-kit@0.0.1",
  },
  {
    name: "safe-relay-kit",
    description: "Abstract users from gas fees - pay with ERC-20 tokens",
    uri: "wrapscan.io/polywrap/safe-relay-kit@0.0.1",
  },
  {
    name: "safe-protocol-kit",
    description: "Interact with Safe contracts",
    uri: "wrapscan.io/polywrap/safe-protocol-kit@0.0.1",
  },
];
