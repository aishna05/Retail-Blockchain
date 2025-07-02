/**
 * Encodes IPFS hash and optional metadata into a QR string.
 * Example output: {"cid":"Qm123...","role":"manufacturer","timestamp":...}
 */
export function generateQRData(ipfsHash: string, role: string): string {
  const payload = {
    cid: ipfsHash,
    role,
    timestamp: Date.now(),
  };

  return JSON.stringify(payload);
}

/**
 * Decodes QR data string into usable JSON object
 */
export function getIPFSDataFromQR(qrData: string): {
  cid: string;
  role: string;
  timestamp: number;
} | null {
  try {
    const parsed = JSON.parse(qrData);
    if (parsed.cid && parsed.role && parsed.timestamp) {
      return parsed;
    }
    return null;
  } catch (err) {
    console.error("Invalid QR data", err);
    return null;
  }
}
