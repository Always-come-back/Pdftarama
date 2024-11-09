import React, { useState } from 'react';
import { Maximize2, Minimize2, Upload } from 'lucide-react';

export const PDFViewer = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        <h2 className="text-xl font-semibold text-gray-800">PDF Reader</h2>
        <button
          onClick={toggleFullscreen}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          {isFullscreen ? (
            <Minimize2 className="w-6 h-6 text-gray-600" />
          ) : (
            <Maximize2 className="w-6 h-6 text-gray-600" />
          )}
        </button>
      </div>

      <div className="flex-1 p-4">
        {!selectedFile ? (
          <label className="w-full h-full border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition-colors">
            <Upload className="w-12 h-12 text-gray-400 mb-4" />
            <p className="text-lg text-gray-600">Drop your PDF here or click to upload</p>
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        ) : (
          <iframe
            src={URL.createObjectURL(selectedFile)}
            className="w-full h-full rounded-lg shadow-lg"
            title="PDF Viewer"
          />
        )}
      </div>
    </div>
  );
};