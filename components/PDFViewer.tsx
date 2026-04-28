"use client"

interface PDFViewerProps {
  pdfPath: string
  title: string
}

export default function PDFViewer({ pdfPath, title }: PDFViewerProps) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-gray-600 text-lg">
          PDF-artikel van De Standaard
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <iframe
          src={pdfPath}
          className="w-full"
          style={{ height: "90vh" }}
          title={title}
        />
      </div>

      <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
        <p className="text-gray-700">
          Het PDF-artikel wordt volledig weergegeven zoals gepubliceerd in De Standaard, 
          met het originele design en layout behouden.
        </p>
      </div>
    </div>
  )
}
