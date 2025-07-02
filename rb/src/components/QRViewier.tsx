import { QRCodeSVG } from "qrcode.react";

import React from "react";

type QRViewerProps = {
  data: unknown;
};

export default function QRViewer({ data }: QRViewerProps) {
  return (
    <div className="mt-4">
      <QRCodeSVG value={JSON.stringify(data)} />
    </div>
  );
}
