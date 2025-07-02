import UploadBatchForm from "@/components/UploadBatchForm";

export default function RetailDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Retail Dashboard</h1>
      <UploadBatchForm role="retail" />
    </div>
  );
}
