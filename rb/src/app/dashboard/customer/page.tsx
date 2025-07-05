"use client";
import { useState } from "react";
import { getIPFSDataFromQR } from "@/lib/qr";

type ProductData = { cid: string; role: string; timestamp: number };

export default function CustomerDashboard() {
  const [productData, setProductData] = useState<ProductData | null>(null);

  const handleScan = (qrData: string) => {
    const ipfsData = getIPFSDataFromQR(qrData);
    if (ipfsData) {
      setProductData(ipfsData);
    } else {
      setProductData(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black to-gray-900">
      <div className="w-full max-w-md bg-gray-900 rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">Scan Product QR</h1>
        {/* Simulate QR scan */}
        <button
          onClick={() => handleScan("{qr_data}")}
          className="w-full py-2 px-4 bg-black hover:bg-gray-800 text-white font-semibold rounded transition"
        >
          Simulate QR Scan
        </button>
        {productData && (
          <pre className="bg-gray-800 p-4 mt-6 rounded text-gray-100 text-sm overflow-x-auto">
            {JSON.stringify(productData, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}
