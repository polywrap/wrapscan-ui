export const sampleGraphql = `type Module implements UriResolver_Module @imports(
  types: [
    "UriResolver_Module",
    "UriResolver_MaybeUriOrManifest",
    "ENS_Module",
    "ENS_Ethereum_Connection",
    "ENS_TxOverrides",
    "ENS_Ethereum_TxResponse",
    "ENS_Ethereum_Access",
    "ENS_RegistrationResult",
    "ENS_ConfigureOpenDomainResponse",
    "ENS_CreateSubdomainInOpenDomainResponse",
    "ENS_CreateSubdomainInOpenDomainAndSetContentHashResponse"
  ]
) {
  tryResolveUri(
    authority: String!
    path: String!
  ): UriResolver_MaybeUriOrManifest

  getFile(
    path: String!
  ): Bytes
}

### Imported Modules START ###

type UriResolver_Module @imported(
  uri: "wrap://ipfs/QmVnRxP9WGxC1D9xjFBGFmCVw8UPetu9EUtKMrXwi3hSDi",
  namespace: "UriResolver",
  nativeType: "Module"
) {
  tryResolveUri(
    authority: String!
    path: String!
  ): UriResolver_MaybeUriOrManifest

  getFile(
    path: String!
  ): Bytes
}

type ENS_Module @imported(
  uri: "wrap://ipfs/QmT7H5A1F1DLXCK17MugvD8FY8qhkbEWxujQXqoY7piBqW",
  namespace: "ENS",
  nativeType: "Module"
) {
  getResolver(
    registryAddress: String!
    domain: String!
    connection: ENS_Ethereum_Connection
  ): String!

  getOwner(
    domain: String!
    registryAddress: String!
    connection: ENS_Ethereum_Connection
  ): String!

  checkIfRecordExists(
    domain: String!
    registryAddress: String!
    connection: ENS_Ethereum_Connection
  ): Boolean!

  getAddress(
    domain: String!
    resolverAddress: String!
    connection: ENS_Ethereum_Connection
  ): String!

  getAddressFromDomain(
    domain: String!
    registryAddress: String!
    connection: ENS_Ethereum_Connection
  ): String!

  getContentHash(
    domain: String!
    resolverAddress: String!
    connection: ENS_Ethereum_Connection
  ): String!

  getContentHashFromDomain(
    domain: String!
    registryAddress: String!
    connection: ENS_Ethereum_Connection
  ): String!

  getExpiryTimes(
    domain: String!
    registrarAddress: String!
    connection: ENS_Ethereum_Connection
  ): String!

  getReverseResolver(
    address: String!
    registryAddress: String!
    connection: ENS_Ethereum_Connection
  ): String!

  getNameFromReverseResolver(
    address: String!
    resolverAddress: String!
    connection: ENS_Ethereum_Connection
  ): String!

  getNameFromAddress(
    address: String!
    registryAddress: String!
    connection: ENS_Ethereum_Connection
  ): String!

  getTextRecord(
    domain: String!
    resolverAddress: String!
    key: String!
    connection: ENS_Ethereum_Connection
  ): String!

  setResolver(
    domain: String!
    resolverAddress: String!
    registryAddress: String!
    connection: ENS_Ethereum_Connection
    txOverrides: ENS_TxOverrides
  ): ENS_Ethereum_TxResponse!

  registerDomain(
    domain: String!
    registrarAddress: String!
    registryAddress: String!
    owner: String!
    connection: ENS_Ethereum_Connection
    txOverrides: ENS_TxOverrides
  ): ENS_Ethereum_TxResponse!

  reverseRegisterDomain(
    domain: String!
    reverseRegistryAddress: String!
    owner: String!
    connection: ENS_Ethereum_Connection
    txOverrides: ENS_TxOverrides
  ): ENS_Ethereum_TxResponse!

  setName(
    domain: String!
    reverseRegistryAddress: String!
    connection: ENS_Ethereum_Connection
    txOverrides: ENS_TxOverrides
  ): ENS_Ethereum_TxResponse!

  setAddress(
    domain: String!
    address: String!
    resolverAddress: String!
    connection: ENS_Ethereum_Connection
    txOverrides: ENS_TxOverrides
  ): ENS_Ethereum_TxResponse!

  setOwner(
    domain: String!
    newOwner: String!
    registryAddress: String!
    connection: ENS_Ethereum_Connection
    txOverrides: ENS_TxOverrides
  ): ENS_Ethereum_TxResponse!

  setSubdomainOwner(
    subdomain: String!
    owner: String!
    registryAddress: String!
    connection: ENS_Ethereum_Connection
    txOverrides: ENS_TxOverrides
  ): ENS_Ethereum_TxResponse!

  setRecord(
    domain: String!
    owner: String!
    resolverAddress: String!
    ttl: String!
    registryAddress: String!
    connection: ENS_Ethereum_Connection
    txOverrides: ENS_TxOverrides
  ): ENS_Ethereum_TxResponse!

  setSubdomainRecord(
    domain: String!
    label: String!
    owner: String!
    resolverAddress: String!
    ttl: String!
    registryAddress: String!
    connection: ENS_Ethereum_Connection
    txOverrides: ENS_TxOverrides
  ): ENS_Ethereum_TxResponse!

  registerSubdomainsRecursively(
    domain: String!
    owner: String!
    resolverAddress: String!
    ttl: String!
    registryAddress: String!
    connection: ENS_Ethereum_Connection
    txOverrides: ENS_TxOverrides
  ): [ENS_RegistrationResult!]!

  registerDomainAndSubdomainsRecursively(
    domain: String!
    owner: String!
    resolverAddress: String!
    ttl: String!
    registrarAddress: String!
    registryAddress: String!
    connection: ENS_Ethereum_Connection
    txOverrides: ENS_TxOverrides
  ): [ENS_RegistrationResult!]!

  setContentHash(
    domain: String!
    cid: String!
    resolverAddress: String!
    connection: ENS_Ethereum_Connection
    txOverrides: ENS_TxOverrides
  ): ENS_Ethereum_TxResponse!

  setAddressFromDomain(
    domain: String!
    address: String!
    registryAddress: String!
    connection: ENS_Ethereum_Connection
    txOverrides: ENS_TxOverrides
  ): ENS_Ethereum_TxResponse!

  setContentHashFromDomain(
    domain: String!
    cid: String!
    registryAddress: String!
    connection: ENS_Ethereum_Connection
    txOverrides: ENS_TxOverrides
  ): ENS_Ethereum_TxResponse!

  deployFIFSRegistrar(
    registryAddress: String!
    tld: String!
    connection: ENS_Ethereum_Connection
    txOverrides: ENS_TxOverrides
  ): String!

  registerSubnodeOwnerWithFIFSRegistrar(
    label: String!
    owner: String!
    fifsRegistrarAddress: String!
    connection: ENS_Ethereum_Connection
    txOverrides: ENS_TxOverrides
  ): ENS_Ethereum_TxResponse!

  setTextRecord(
    domain: String!
    resolverAddress: String!
    key: String!
    value: String!
    connection: ENS_Ethereum_Connection
    txOverrides: ENS_TxOverrides
  ): ENS_Ethereum_TxResponse!

  configureOpenDomain(
    tld: String!
    owner: String!
    registryAddress: String!
    resolverAddress: String!
    registrarAddress: String!
    connection: ENS_Ethereum_Connection
    txOverrides: ENS_TxOverrides
  ): ENS_ConfigureOpenDomainResponse!

  createSubdomainInOpenDomain(
    label: String!
    domain: String!
    owner: String!
    fifsRegistrarAddress: String!
    registryAddress: String!
    resolverAddress: String!
    connection: ENS_Ethereum_Connection
    txOverrides: ENS_TxOverrides
  ): ENS_CreateSubdomainInOpenDomainResponse!

  createSubdomainInOpenDomainAndSetContentHash(
    label: String!
    domain: String!
    owner: String!
    fifsRegistrarAddress: String!
    registryAddress: String!
    resolverAddress: String!
    cid: String!
    connection: ENS_Ethereum_Connection
    txOverrides: ENS_TxOverrides
  ): ENS_CreateSubdomainInOpenDomainAndSetContentHashResponse
}

### Imported Modules END ###

### Imported Objects START ###

type UriResolver_MaybeUriOrManifest @imported(
  uri: "wrap://ipfs/QmVnRxP9WGxC1D9xjFBGFmCVw8UPetu9EUtKMrXwi3hSDi",
  namespace: "UriResolver",
  nativeType: "MaybeUriOrManifest"
) {
  uri: String
  manifest: Bytes
}

type ENS_Ethereum_Connection @imported(
  uri: "wrap://ipfs/QmT7H5A1F1DLXCK17MugvD8FY8qhkbEWxujQXqoY7piBqW",
  namespace: "ENS",
  nativeType: "Ethereum_Connection"
) {
  node: String
  networkNameOrChainId: String
}

type ENS_TxOverrides @imported(
  uri: "wrap://ipfs/QmT7H5A1F1DLXCK17MugvD8FY8qhkbEWxujQXqoY7piBqW",
  namespace: "ENS",
  nativeType: "TxOverrides"
) {
  gasPrice: BigInt
  gasLimit: BigInt
}

type ENS_Ethereum_TxResponse @imported(
  uri: "wrap://ipfs/QmT7H5A1F1DLXCK17MugvD8FY8qhkbEWxujQXqoY7piBqW",
  namespace: "ENS",
  nativeType: "Ethereum_TxResponse"
) {
  hash: String!
  to: String
  from: String!
  nonce: UInt32!
  gasLimit: BigInt!
  gasPrice: BigInt
  data: String!
  value: BigInt!
  chainId: BigInt!
  blockNumber: BigInt
  blockHash: String
  timestamp: UInt32
  confirmations: UInt32!
  raw: String
  r: String
  s: String
  v: UInt32
  type: UInt32
  accessList: [ENS_Ethereum_Access!]
}

type ENS_Ethereum_Access @imported(
  uri: "wrap://ipfs/QmT7H5A1F1DLXCK17MugvD8FY8qhkbEWxujQXqoY7piBqW",
  namespace: "ENS",
  nativeType: "Ethereum_Access"
) {
  address: String!
  storageKeys: [String!]!
}

type ENS_RegistrationResult @imported(
  uri: "wrap://ipfs/QmT7H5A1F1DLXCK17MugvD8FY8qhkbEWxujQXqoY7piBqW",
  namespace: "ENS",
  nativeType: "RegistrationResult"
) {
  name: String!
  didRegister: Boolean!
  tx: ENS_Ethereum_TxResponse
}

type ENS_ConfigureOpenDomainResponse @imported(
  uri: "wrap://ipfs/QmT7H5A1F1DLXCK17MugvD8FY8qhkbEWxujQXqoY7piBqW",
  namespace: "ENS",
  nativeType: "ConfigureOpenDomainResponse"
) {
  fifsRegistrarAddress: String!
  registerOpenDomainTxReceipt: ENS_Ethereum_TxResponse!
  setSubdomainRecordTxReceipt: ENS_Ethereum_TxResponse!
}

type ENS_CreateSubdomainInOpenDomainResponse @imported(
  uri: "wrap://ipfs/QmT7H5A1F1DLXCK17MugvD8FY8qhkbEWxujQXqoY7piBqW",
  namespace: "ENS",
  nativeType: "CreateSubdomainInOpenDomainResponse"
) {
  registerSubdomainTxReceipt: ENS_Ethereum_TxResponse!
  setResolverTxReceipt: ENS_Ethereum_TxResponse!
}

type ENS_CreateSubdomainInOpenDomainAndSetContentHashResponse implements ENS_CreateSubdomainInOpenDomainResponse @imported(
  uri: "wrap://ipfs/QmT7H5A1F1DLXCK17MugvD8FY8qhkbEWxujQXqoY7piBqW",
  namespace: "ENS",
  nativeType: "CreateSubdomainInOpenDomainAndSetContentHashResponse"
) {
  setContentHashReceiptTx: ENS_Ethereum_TxResponse!
  registerSubdomainTxReceipt: ENS_Ethereum_TxResponse!
  setResolverTxReceipt: ENS_Ethereum_TxResponse!
}

### Imported Objects END ###

### Imported Envs START ###

### Imported Envs END ###`;
