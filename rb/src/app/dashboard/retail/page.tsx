'use client';
import UploadBatchForm from "@/components/UploadBatchForm";

export default function RetailDashboard() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black to-gray-900 p-10">
        <div className="bg-gray-900 rounded-xl shadow-lg p-6 w-full max-w-max">
          <h1 className="text-2xl font-bold mb-6 text-white text-center">Retail Dashboard</h1>
          <UploadBatchForm role="retail" />
        </div>
      </div>
    </div>
  );
}
