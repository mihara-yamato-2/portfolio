import React, { useEffect, useState } from "react";

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title: string;
}

const PdfViewerModal: React.FC<PdfViewerModalProps> = ({
  isOpen,
  onClose,
  pdfUrl,
  title,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Small delay to ensure the element is rendered before animation
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
      // Wait for animation to complete before unmounting
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ease-out ${
          isVisible ? "bg-opacity-60" : "bg-opacity-0"
        }`}
        onClick={onClose}
      ></div>

      {/* Modal - Slide in from bottom with bounce effect */}
      <div
        className={`relative bg-white rounded-t-2xl shadow-2xl w-full max-w-4xl h-[85vh] flex flex-col transform transition-all duration-500 ease-out ${
          isVisible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-full scale-95 opacity-0"
        }`}
        style={{
          boxShadow:
            "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <h2 className="text-xl font-bold text-gray-900 truncate pr-4">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="flex-shrink-0 p-2 text-gray-500 hover:text-gray-700 hover:bg-white hover:shadow-md rounded-full transition-all duration-200 transform hover:scale-110"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* PDF Content */}
        <div className="flex-1 overflow-hidden bg-gray-100">
          <iframe
            src={pdfUrl}
            className="w-full h-full border-0 rounded-lg"
            title={title}
            style={{ minHeight: "400px" }}
          />
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 flex justify-between items-center">
          <div className="text-sm text-gray-600 font-medium">
            📄 PDFビューアー
          </div>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 hover:bg-gray-50 hover:shadow-md transition-all duration-200 transform hover:scale-105"
            >
              閉じる
            </button>
            <a
              href={pdfUrl}
              download
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 hover:bg-blue-700 hover:shadow-md transition-all duration-200 transform hover:scale-105"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              ダウンロード
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfViewerModal;
