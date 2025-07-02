import UploadBatchForm from "@/components/UploadBatchForm";

export default function WholesaleDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Wholesale Dashboard</h1>
      <UploadBatchForm role="wholesale" />
    </div>
  );
}
