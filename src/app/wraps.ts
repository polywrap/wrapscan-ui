export type WrapHomepageItem = {
  name: string;
  description: string;
  uri: string;
  logoUrl?: string;
};

export const wraps: WrapHomepageItem[] = [
  {
    name: "Ethers core",
    description: "Description of this wrap.",
    uri: "ipfs/QmNkqWQuTAiZaLSR3VE53uazuAEqZevv1XQtvAYahuyJ6d",
  },
  {
    name: "Ethers utils",
    description: "Description of this wrap.",
    uri: "ipfs/QmaHYcvpM3mWVY7KSi4kmEKP26JhE3SWYitKCUaLfJQguy",
  },
  {
    name: "ENS",
    description: "Description of this wrap.",
    uri: "ipfs/QmNxY6Zm7DxzTofHiWkj4ZogzfPgJmGLvucWdR1iEyR6Nz",
  },
  {
    name: "Sample",
    description: "A sample wrap.",
    uri: "http/http://localhost:3000/samplewrap",
  },
];
