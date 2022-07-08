import { ethers } from "hardhat";

async function main() {

  const StorageContract = await ethers.getContractFactory("Storage");
  const storage = await StorageContract.deploy("storge test");

  await storage.deployed();

  const setTx = await storage.set(1, "test");
  await setTx.wait();

  console.log("set hash: ",setTx.hash);

  console.log("get result: ", await storage.get(1));

  console.log("Contract deployed to:", storage.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
