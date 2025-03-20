"use client"
import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function QRGenerator() {
  const [url, setUrl] = useState("");
  const [qrValue, setQrValue] = useState("");

  const generateQR = () => {
    setQrValue(url);
  };

  const downloadQR = () => {
    const canvas = document.querySelector("canvas");
    if (!canvas) {
      console.error("QR Code not found!");
      return;
    }
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    const link = document.createElement("a");
    link.href = pngUrl;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="p-2 border border-gray-300 rounded-md w-80 mb-4"
      />
      <button
        onClick={generateQR}
        className="px-4 py-2 bg-blue-500 text-white rounded-md mb-4"
      >
        Generate QR Code
      </button>
      {qrValue && (
        <div className="flex flex-col items-center gap-4">
          <QRCodeCanvas value={qrValue} size={200} />
          <button
            onClick={downloadQR}
            className="px-4 py-2 bg-green-500 text-white rounded-md"
          >
            Download QR Code
          </button>
        </div>
      )}
    </div>
  );
}
