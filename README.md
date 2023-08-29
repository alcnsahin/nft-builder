# NFT Minting
This application is a simple example to understand the process of creating an NFT.


__MumbaiTestNet Metamask Network Parameters:__

- __Network Name:__ Mumbai Testnet
- __New RPC URL:__ https://rpc-mumbai.maticvigil.com
- __Chain ID:__ 80001
- __Currency Symbol:__ MATIC
- __Block Explorer URL:__ https://polygonscan.com/

## API Endpoints
- __http://localhost:3011/store__ 

This endpoint posts image to IPFS by using nft.storage API
```text
Method: POST
Payload: None
```
Response:
```json
{
    "metadata": {
        "name": "TOGGNFTTest2",
        "description": "TOGG NFT Test2",
        "image": "ipfs://bafybeiatlrvoolbn5m5bxeua5hramuuuemc44w26cjevktd7yc6hy5qxiq/TOGGNFTTest.png"
    },
    "ipnft": "bafyreifddym57uuvki275ndmcx4dzjc6yrp5askoeyjd2lzzpn2ibixkhm",
    "url": "ipfs://bafyreifddym57uuvki275ndmcx4dzjc6yrp5askoeyjd2lzzpn2ibixkhm/metadata.json"
}
```

- __http://localhost:3011/mintNFT__ 

This endpoint mints the image and returns the tx id
```text
Method: POST
```
Payload:
```json
{
  "metadata": "ipfs://bafyreifddym57uuvki275ndmcx4dzjc6yrp5askoeyjd2lzzpn2ibixkhm/metadata.json"
}
```
Response:
```json
{
  "txHash": "0x8f7defd844434f954d1d15b94b9e654ac2944883f1d48c0bb8ca880b110d6986"
}
```


## Hardhat CLI

https://hardhat.org/hardhat-runner/docs/getting-started#overview

### Deploy contract

```shell
npx hardhat run scripts/deploy-contract.mjs --network PolygonMumbai
```

__Output:__

```text
nft-builder-backend % npx hardhat run scripts/deploy-contract.mjs --network PolygonMumbai
ContractAddress:  0x245Ad6929537c872ff6Aa6124f3557Ea2782d9f3
```

### Mint NFT
You can also use this cli to mint your NFT

```shell
npx hardhat run scripts/mint-nft.mjs --network PolygonMumbai
```

__Output:__

```text
NFT minted to:  0x8B8590761d9a27f9abffCa684610Cd02a61a4B5B
```

### Verify Your NFT

For this example you can see the result:
https://testnets.opensea.io/0x8B8590761d9a27f9abffCa684610Cd02a61a4B5B

### Minting Transaction Example
https://mumbai.polygonscan.com/tx/0x8f7defd844434f954d1d15b94b9e654ac2944883f1d48c0bb8ca880b110d6986

## References
- https://nftschool.dev/tutorial/mint-nftstorage-polygon/#introduction