import { ethers } from "ethers";
// ABI + Smart contract address setup here

// Declare the ethereum property on the Window interface
declare global {
  interface Window {
    ethereum?: any;
  }
}

// Import or define your contract ABI here
const ABI = [
  // ...your contract ABI goes here
];

export async function storeOnEthereum(ipfsHash: string, role: string) {
  // Connect wallet
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract("CONTRACT_ADDRESS", ABI, signer);

  await contract.storeData(ipfsHash, role); // method must match Solidity
}
