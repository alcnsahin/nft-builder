import dotenv from 'dotenv'
dotenv.config()

const CONTRACT_ADDRESS = process.env.TOGG_CONTRACT_ID
const META_DATA_URL = "ipfs://bafyreicoyiqv4vd5xwvquac6dxt3q53blnlz6b7k5fggzfhu2wjdmauqfu/metadata.json"

async function mintNFT(contractAddress, metaDataURL) {
    const TOGGNFT = await ethers.getContractFactory("TOGGNFTTestContract")
    const [owner] = await ethers.getSigners()
    await TOGGNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
    console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });