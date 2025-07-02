import UploadBatchForm from "@/components/UploadBatchForm";

export default function ManufacturerDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Manufacturer Dashboard</h1>
      <UploadBatchForm role="manufacturer" />
    </div>
  );
}
