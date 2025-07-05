"use client";
import { uploadToIPFS } from "@/lib/ipfs";
import { storeOnEthereum } from "@/lib/ethereum";
import { useState } from "react";

interface UploadBatchFormProps {
  role: string;
}

export default function UploadBatchForm({ role }: UploadBatchFormProps) {
  const [file, setFile] = useState<File | null>(null);
  const [businessName, setBusinessName] = useState("");
  const [businessLocation, setBusinessLocation] = useState(""); 
  const [orderId, setOrderId] = useState("");
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [pricePerUnit, setPricePerUnit] = useState(""); 
  const [batchNumber, setBatchNumber] = useState("");
  const totalPrice = parseFloat(productQuantity) * parseFloat(pricePerUnit) || 0;

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return alert("Upload a file");
    const ipfsHash = await uploadToIPFS(file);
    await storeOnEthereum(ipfsHash, role);
    alert("Uploaded successfully");
  };

  return (
    <form
      onSubmit={handleUpload}
      className="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-xl p-8 flex flex-col gap-6"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Upload Batch Details
      </h2>
      <input
        value={businessName}
        onChange={(e) => setBusinessName(e.target.value)}
        className="border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-500"
        type="text"
        placeholder="Enter Business Name"
      />
      <input
        value={businessLocation}
        onChange={(e) => setBusinessLocation(e.target.value)}
        className="border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-500"
        type="text"
        placeholder="Enter Business Location"
      />
      <input
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        className="border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-500"
        type="text"
        placeholder="Enter Order ID"
      />
      <input
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        className="border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-500"
        type="text"
        placeholder="Enter Product Name"
      />
      <div className="flex gap-4">
        <input
          value={productQuantity}
          onChange={(e) => setProductQuantity(e.target.value)}
          className="flex-1 border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          type="number"
          min="0"
          placeholder="Product Quantity"
        />
        <input
          value={pricePerUnit}
          onChange={(e) => setPricePerUnit(e.target.value)}
          className="flex-1 border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          type="number"
          min="0"
          placeholder="Price per Unit"
        />
      </div>
      <input
        value={batchNumber}
        onChange={(e) => setBatchNumber(e.target.value)}
        className="border border-gray-300 p-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-500"
        type="text"
        placeholder="Enter Batch Number (10 digits)"
        maxLength={10}
      />
      <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg text-gray-700 font-medium">
        <span>Total Price:</span>
        <span className="font-semibold text-green-700">{totalPrice.toFixed(2)} INR</span>
      </div>
      <div className="flex justify-between items-center bg-gray-100 p-3 rounded-lg text-gray-700">
        <span>Time of Order:</span>
        <span>{new Date().toLocaleString()}</span>
      </div>
      <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 p-6 rounded-lg cursor-pointer hover:border-green-500 transition">
        <span className="text-gray-600 mb-2">Upload File</span>
        <input
          type="file"
          className="hidden"
          onChange={(e) => {
            const files = e.target.files;
            if (files && files[0]) {
              setFile(files[0]);
            } else {
              setFile(null);
            }
          }}
        />
        {file && (
          <span className="text-green-700 text-sm mt-2">{file.name}</span>
        )}
      </label>
      <button
        className="bg-green-600 hover:bg-green-700 text-white font-semibold p-3 rounded-lg transition"
        type="submit"
      >
        Upload
      </button>
    </form>
  );
}