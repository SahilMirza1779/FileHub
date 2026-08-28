import { useState } from "react";
import { useParams, Link } from "react-router-dom";

function ToolPage() {
  const { toolId } = useParams();

  // Naya Lazy State Initialization (Purana wala hata diya gaya hai)
  const [uploadCount, setUploadCount] = useState(() => {
    const savedCount = localStorage.getItem("filehub_upload_count");
    return savedCount ? parseInt(savedCount) : 0;
  });

  const formatTitle = (str) => {
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const toolName = formatTitle(toolId);

  const handleFileUpload = (e) => {
    e.preventDefault();
    if (uploadCount < 5) {
      const newCount = uploadCount + 1;
      setUploadCount(newCount);
      localStorage.setItem("filehub_upload_count", newCount);

      alert(`File processing started! (${newCount}/5 free uses completed)`);
    }
  };

  const resetCount = () => {
    setUploadCount(0);
    localStorage.setItem("filehub_upload_count", 0);
  };

  return (
    <div className="container mt-5 pt-4 pb-5 text-center">
      <Link
        to="/pdf-tools"
        className="text-decoration-none text-secondary mb-4 d-inline-block text-start w-100"
      >
        <i className="bi bi-arrow-left"></i> Back to All Tools
      </Link>

      <h1 className="fw-bolder text-dark mb-3">{toolName}</h1>
      <p className="text-muted mb-4">
        Upload your file below to start using the {toolName} tool.
      </p>

      {uploadCount >= 5 ? (
        <div
          className="card border-0 shadow-lg rounded-4 p-5 mx-auto"
          style={{ maxWidth: "600px", backgroundColor: "#fff5f8" }}
        >
          <div className="text-danger mb-3">
            <i className="bi bi-lock-fill" style={{ fontSize: "4rem" }}></i>
          </div>
          <h3 className="fw-bold text-dark">Free Limit Reached!</h3>
          <p className="text-muted mb-4">
            You have used all 5 free file conversions. Upgrade to FileHub Pro
            for unlimited access across all tools.
          </p>
          <div>
            <Link
              to="/pricing"
              className="btn btn-danger rounded-pill px-5 py-3 fw-bold fs-5 shadow"
            >
              Upgrade to Pro
            </Link>
          </div>
          <button
            onClick={resetCount}
            className="btn btn-link text-muted mt-4 small text-decoration-none"
          >
            Reset Counter (For Testing Only)
          </button>
        </div>
      ) : (
        <div
          className="card border-2 border-primary border-dashed rounded-4 p-5 mx-auto shadow-sm"
          style={{
            maxWidth: "600px",
            backgroundColor: "#f8faff",
            borderStyle: "dashed",
          }}
        >
          <div className="text-primary mb-3">
            <i
              className="bi bi-cloud-arrow-up-fill"
              style={{ fontSize: "4rem" }}
            ></i>
          </div>
          <h4 className="fw-bold">Choose a file or drag & drop it here</h4>
          <p className="text-muted small mb-4">
            Supported formats: PDF (Max size: 50MB)
          </p>

          <div>
            <button
              onClick={handleFileUpload}
              className="btn btn-primary rounded-pill px-5 py-3 fw-bold fs-5 shadow"
            >
              Select File
            </button>
          </div>

          <div className="mt-4">
            <span className="badge bg-warning text-dark rounded-pill px-3 py-2 border shadow-sm">
              {5 - uploadCount} free uploads remaining
            </span>
          </div>

          <p className="text-muted small mt-3 mb-0">
            <i className="bi bi-shield-lock-fill text-success"></i> Files are
            securely processed and deleted after 1 hour.
          </p>
        </div>
      )}
    </div>
  );
}

export default ToolPage;
