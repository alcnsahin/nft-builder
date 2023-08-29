import fs from 'fs'
import dotenv from 'dotenv'
import {NFTStorage, File} from "nft.storage"
import {ethers, JsonRpcProvider} from 'ethers'
import express from 'express'
import ABI from './contracts/TOGGNFTTestContractABI.js'

const app = express()

app.use(express.json()); // req.body
dotenv.config()

const port = 3011
const PRIVATE_KEY = process.env.PRIVATE_KEY
const API_KEY = process.env.NFT_STORAGE_API_KEY
const TOGG_NFT_CONTRACT_ID = process.env.TOGG_CONTRACT_ID

const provider = new JsonRpcProvider('https://rpc-mumbai.maticvigil.com')
const wallet = new ethers.Wallet(PRIVATE_KEY, provider)


app.get('/', (req, res) => {
    res.send('Hi')
})

app.post('/store', async (req, res) => {
    const client = new NFTStorage({token: API_KEY})
    const metadata = await client.store({
        name: 'TOGGNFTTest2',
        description: 'TOGG NFT Test2',
        image: new File(
            [await fs.promises.readFile('assets/TOGGNFTTest.png')],
            'TOGGNFTTest.png',
            {type: 'image/png'}
        ),
    })
    res.send({
        metadata: metadata.data,
        ipnft: metadata.ipnft,
        url: metadata.url,
    })
})

app.post('/mintNFT', async (req, res) => {
    console.log(req.body)
    const metadataURL = req.body.metadata
    try {
        const contract = new ethers.Contract(TOGG_NFT_CONTRACT_ID, ABI, wallet)
        const tx = await contract.mintNFT(wallet.address, metadataURL)
        await tx.wait()

        res.send({txHash: tx.hash})
    } catch (e) {
        console.log(e)
        res.status(500).send
        {
            message: e.message
        }
    }
})

app.listen(port, () => {
    console.log('App started successfully')
})
