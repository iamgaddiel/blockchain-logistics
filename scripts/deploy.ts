import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const EtherTransfer = await ethers.getContractFactory("EtherTransfer");
  const etherTransfer = await EtherTransfer.deploy();

  console.log("Contract address:", etherTransfer?.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
