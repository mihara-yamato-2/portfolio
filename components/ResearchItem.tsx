import React, { useState } from "react";
import type { ResearchPaper } from "../types";
import { DownloadIcon } from "./icons/DownloadIcon";
import PdfViewerModal from "./PdfViewerModal";

interface ResearchItemProps {
  paper: ResearchPaper;
}

const ResearchItem: React.FC<ResearchItemProps> = ({ paper }) => {
  const { title, authors, conference, year, abstract, pdfUrl } = paper;
  const [showAbstract, setShowAbstract] = useState(false);
  const [showPdfModal, setShowPdfModal] = useState(false);

  return (
    <div className="bg-white p-6 mb-6 border border-neutral/20">
      <h3 className="text-xl font-bold text-neutral-dark">{title}</h3>
      <p className="text-neutral-medium text-sm mt-1">{authors.join(", ")}</p>
      <p className="text-sm text-secondary mt-1">
        <em>{conference}</em>, {year}
      </p>

      <div className="mt-4 flex flex-wrap gap-4 items-center">
        <button
          onClick={() => setShowAbstract(!showAbstract)}
          className="text-primary hover:text-primary-dark font-medium text-sm"
        >
          {showAbstract ? "要旨を隠す" : "要旨を表示"}
        </button>
        {pdfUrl && (
          <button
            onClick={() => setShowPdfModal(true)}
            className="inline-flex items-center text-primary hover:text-primary-dark font-medium text-sm"
          >
            <DownloadIcon className="w-4 h-4 mr-1" /> PDF
          </button>
        )}
      </div>

      {showAbstract && (
        <div className="mt-4 p-4 bg-neutral rounded">
          <p className="text-neutral-dark text-sm leading-relaxed prose max-w-none prose-sm">
            {abstract}
          </p>
        </div>
      )}

      {/* PDF Viewer Modal */}
      <PdfViewerModal
        isOpen={showPdfModal}
        onClose={() => setShowPdfModal(false)}
        pdfUrl={pdfUrl || ""}
        title={title}
      />
    </div>
  );
};

export default ResearchItem;
