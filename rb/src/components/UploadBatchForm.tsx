"use client";
import { uploadToIPFS } from "@/lib/ipfs";
import { storeOnEthereum } from "@/lib/ethereum";
import { useState } from "react";

interface UploadBatchFormProps {
  role: string;
}

export default function UploadBatchForm({ role }: UploadBatchFormProps) {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return alert("Upload a file");
    const ipfsHash = await uploadToIPFS(file);
    await storeOnEthereum(ipfsHash, role);
    alert("Uploaded successfully");
  };

  return (
    <form onSubmit={handleUpload} className="flex flex-col gap-4 mt-4">
      <input
        type="file"
        onChange={(e) => {
          const files = e.target.files;
          if (files && files[0]) {
            setFile(files[0]);
          } else {
            setFile(null);
          }
        }}
      />
      <button className="bg-green-600 text-white p-2 rounded">Upload</button>
    </form>
  );
}