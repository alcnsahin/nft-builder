async function deployContract() {
    const TOGGNFTTestContractFactory = await ethers.getContractFactory("TOGGNFTTestContract")
    const TOGGNFTTest = await TOGGNFTTestContractFactory.deploy()
    await TOGGNFTTest.deployed()

    const txHash = TOGGNFTTest.deployTransaction.hash
    const txReceipt = await ethers.provider.waitForTransaction(txHash)
    const contractAddress = txReceipt.contractAddress
    console.log('ContractAddress: ', contractAddress)
}

deployContract().then(() => {
    process.exit(0)
}).catch((err) => {
    console.error(err)
    process.exit(1)
})