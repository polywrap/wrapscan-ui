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
    uri: "ipfs/QmNkwdHYHqCoepQPmaJvsRSN525a3WBAZMAKpdtsF4VtWG",
  },
  {
    name: "ens",
    description: "Purchase & configure domains on the Ethereum Name Service",
    uri: "ipfs/QmbESzCRArrazFff9EbDeZ44fmENBZfVBkG7AMrAvjevQL",
  },
  {
    name: "ipfs-http-client",
    description: "Client library for the IPFS HTTP API",
    uri: "ipfs/QmNow41R8BTZj4spdfLVkMZHUna8Vs13MUt5aMGAX2ke7G",
  },
  {
    name: "uniswap-v3",
    description:
      "Interact with the Uniswap V3 smart contracts in any environment",
    uri: "ipfs/QmUGTMYE1upBBFGh4TLMDR6BKWK3TtPLMdzAiuLdUeQYVD",
  },
  {
    name: "safe-account-abstraction",
    description: "Add safe account abstraction into any application",
    uri: "ipfs/QmUtw73JEfEpnL3DcgzWiWz1kHomVfgEGpo5s8UNd76quS",
  },
  {
    name: "safe-factory",
    description: "Deploy new safes",
    uri: "ipfs/QmR7yiQv5jULzZ8ysHbCtjMowLiuiv2hX6Z4DiyfdQd5Pp",
  },
  {
    name: "safe-manager",
    description: "Interact with safes",
    uri: "ipfs/Qmf9mRhNvKN1wfN52VdiZkjQiRw1WWEBYnwkuwzFg1ZjQn",
  },
];
