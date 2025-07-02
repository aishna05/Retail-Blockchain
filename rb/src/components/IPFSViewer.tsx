type Props = {
  cid: string;
  fileType?: "image" | "json" | "text";
};

export default function IPFSViewer({ cid, fileType = "text" }: Props) {
  const url = `https://ipfs.io/ipfs/${cid}`;

  return (
    <div className="mt-4 p-4 border rounded bg-gray-50">
      <h2 className="text-md font-semibold mb-2">IPFS Content Viewer</h2>

      {fileType === "image" ? (
        <img src={url} alt="IPFS file" className="max-w-full rounded" />
      ) : fileType === "json" ? (
        <iframe src={url} className="w-full h-64 rounded" />
      ) : (
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          View IPFS File
        </a>
      )}
    </div>
  );
}
