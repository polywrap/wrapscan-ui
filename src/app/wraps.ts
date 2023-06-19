export type WrapHomepageItem = {
  name: string;
  description: string;
  uri: string;
  logoUrl?: string;
};

export const wraps: WrapHomepageItem[] = [
  {
    name: "ethereum-wrapper",
    description: "Description",
    uri: "ipfs/QmS4Z679ZE8WwZSoYB8w9gDSERHAoWG1fX94oqdWpfpDq3",
  },
  {
    name: "ens",
    description: "Description",
    uri: "ipfs/QmWG8NJnvGMCosxaUWuRna33MSDR331rByGTdy4EDsVjNL",
  },
  {
    name: "ipfs-http-client-as",
    description: "Asdf",
    uri: "ipfs/QmWC71YkXywceZVqwrDQ6BVYuu2FNnSVReQdp925EkMPqu",
  },
  {
    name: "uniswap-v3",
    description: "Asdf",
    uri: "ipfs/QmbAgd4ccxYcbPCeDBb67SFybMZiNKQdCt32EzCEi5euh3",
  },
  {
    name: "pileks-template-wasm-as",
    description: "A sample wrap.",
    uri: "ipfs/QmYvoAzYYLbLeD1JRuBVJ75xGs7DcY1R1eTmbVFHgoL4su",
  },
];
