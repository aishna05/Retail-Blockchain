import { Web3Storage } from "web3.storage";

export async function uploadToIPFS(file: File): Promise<string> {
  const client = new Web3Storage({ token: process.env.NEXT_PUBLIC_WEB3_STORAGE_TOKEN! });
  const cid = await client.put([file]);
  return cid;
}