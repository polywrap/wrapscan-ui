export type WrapHomepageItem = {
  name: string;
  description: string;
  uri: string;
  logoUrl?: string;
};

export const wraps: WrapHomepageItem[] = [
  {
    name: "ens",
    description: "Purchase & configure domains on the Ethereum Name Service",
    uri: "ipfs/QmaWeZ4yf7hDnRN7Ri3o8iQMrQLxXM2asWJci3emmLXtwM",
  },
  {
    name: "ipfs-http-client",
    description: "Client library for the IPFS HTTP API",
    uri: "ipfs/QmRiHpjJSqrE9ShiYLvqgE971tzvUR1Hfkehdk8UvHXELm",
  },
  {
    name: "uniswap-v3",
    description: "Interact with the Uniswap V3 smart contracts in any environment",
    uri: "ipfs/QmVmQ5v7EU6YxyWvoGjwpZ81Mo2cq1C5b17d5DFj4RL8Z2",
  },
  {
    name: "safe-account-abstraction",
    description: "Add safe account abstraction into any application",
    uri: "ipfs/QmNVzGPg6ztrtn2o1J7ELLu43oBJDguiMzRMuRF6y7QcFy",
  },
  {
    name: "safe-factory",
    description: "Deploy new safes",
    uri: "ipfs/QmSSPrGAGTDoMn9QTH4FjcoSGMHVmiUmpRRVnuhUpbgjNa",
  },
  {
    name: "safe-manager",
    description: "Interact with safes",
    uri: "ipfs/QmaxuS9NtBX46EdAn4Vk2eAxZUhi8nA8N9czBhMPLtCxAe",
  },
];
