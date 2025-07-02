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
    <div className="p-6">
      <h1>Scan Product QR</h1>
      {/* Simulate QR scan */}
      <button onClick={() => handleScan("{qr_data}")}>Simulate QR Scan</button>

      {productData && (
        <pre className="bg-gray-100 p-4 mt-4 rounded">{JSON.stringify(productData, null, 2)}</pre>
      )}
    </div>
  );
}
