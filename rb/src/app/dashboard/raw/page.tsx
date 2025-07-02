import  UploadBatchForm  from "@/components/UploadBatchForm";

export default function RawDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Raw Material Dashboard</h1>
      <UploadBatchForm role="raw" />
    </div>
  );
}
