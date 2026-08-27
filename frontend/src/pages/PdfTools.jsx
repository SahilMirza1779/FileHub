import { Link } from "react-router-dom";

function PdfTools() {
  const toolCategories = [
    {
      title: "Convert PDF",
      icon: "bi-arrow-repeat",
      color: "text-primary",
      tools: [
        "PDF to Word",
        "Word to PDF",
        "PDF to Excel",
        "Excel to PDF",
        "PDF to PPT",
        "PPT to PDF",
        "PDF to JPG",
        "JPG to PDF",
        "PDF to PNG",
        "PNG to PDF",
        "PDF to TXT",
        "TXT to PDF",
      ],
    },
    {
      title: "PDF Editor",
      icon: "bi-pencil-square",
      color: "text-secondary",
      tools: [
        "Edit PDF",
        "Add Text to PDF",
        "Add Image to PDF",
        "Draw on PDF",
        "Highlight PDF",
        "Add Shapes",
        "Add Comments",
        "Fill PDF",
      ],
    },
    {
      title: "PDF Security",
      icon: "bi-shield-lock-fill",
      color: "text-success",
      tools: [
        "Protect with Password",
        "Unlock PDF",
        "Remove Password",
        "Watermark PDF",
        "Remove Watermark",
        "Redact PDF",
      ],
    },
    {
      title: "PDF Signing",
      icon: "bi-pen-fill",
      color: "text-warning",
      tools: [
        "Sign PDF",
        "Add Signature",
        "Request Signature",
        "Digital Signature",
      ],
    },
    {
      title: "PDF Advanced",
      icon: "bi-cpu-fill",
      color: "text-danger",
      tools: [
        "OCR PDF",
        "PDF to Text",
        "Extract Image from PDF",
        "PDF Repair",
        "Compare PDF",
        "PDF Metadata Editor",
      ],
    },
    {
      title: "PDF Page Tools",
      icon: "bi-file-earmark-break-fill",
      color: "text-info",
      tools: [
        "Add PDF Pages",
        "Remove Pages",
        "Reorder Pages",
        "Add Header & Footer",
        "Crop PDF",
        "Resize PDF Pages",
        "Add Page Numbers",
        "Delete PDF Pages",
        "Extract PDF Pages",
      ],
    },
  ];

  return (
    <div className="container mt-5 pt-4 pb-5">
      <div className="text-center mb-5">
        <h1 className="fw-bolder text-dark">All PDF Tools</h1>
        <p className="text-muted">
          Everything you need to modify, secure, and manage your PDFs.
        </p>
      </div>

      <div className="row g-4">
        {toolCategories.map((category, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div
              className="card h-100 border-0 shadow-sm rounded-4 p-4"
              style={{ backgroundColor: "#f8f9fa" }}
            >
              <div className="d-flex align-items-center mb-3">
                <i
                  className={`bi ${category.icon} fs-4 me-2 ${category.color}`}
                ></i>
                <h5 className="fw-bold mb-0">{category.title}</h5>
              </div>
              <ul className="list-unstyled mb-0">
                {category.tools.map((tool, i) => (
                  <li key={i} className="mb-2">
                    <Link
                      to={`/tool/${tool.toLowerCase().replace(/ /g, "-")}`}
                      className="text-decoration-none text-secondary d-flex align-items-center"
                      style={{ fontSize: "15px" }}
                    >
                      <i
                        className="bi bi-chevron-right me-2"
                        style={{ fontSize: "12px" }}
                      ></i>{" "}
                      {tool}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PdfTools;
