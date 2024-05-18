const { ethers } = require("hardhat");
async function main() {
    const Jeda = await ethers.getContractFactory("jeda");
    const jeda = await Jeda.deploy("Jeda", "JEDA");

    await jeda.deployed();

    console.log("Successfully deployed smart contract to:", jeda.address);

    await jeda.mint("https://ipfs.io/ipfs/QmSdDQ55sV69nTYLUEYNej97rbQ3Y2K6yTq7MMHENnPXRj");
    console.log("NFT successfully minted");
}

main().then(() => process.exit(0))
    .catch(err => {
        console.error(err);
        process.exit(1)
    });