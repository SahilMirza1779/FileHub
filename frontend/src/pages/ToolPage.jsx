import { useParams, Link } from "react-router-dom";

function ToolPage() {
  // We will use URL parameters to extract the tool name from the URL.
  const { toolId } = useParams();

  // Converting a URL-style name back to normal text (e.g., from 'edit-pdf' to 'edit pdf')
  const formatTitle = (str) => {
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const toolName = formatTitle(toolId);

  return (
    <div className="container mt-5 pt-4 pb-5 text-center">
      <Link
        to="/pdf-tools"
        className="text-decoration-none text-secondary mb-4 d-inline-block text-start w-100"
      >
        <i className="bi bi-arrow-left"></i> Back to All Tools
      </Link>

      <h1 className="fw-bolder text-dark mb-3">{toolName}</h1>
      <p className="text-muted mb-5">
        Upload your file below to start using the {toolName} tool.
      </p>

      {/* File Upload Box (This will connect with Aftab's app.) */}
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
          <button className="btn btn-primary rounded-pill px-5 py-3 fw-bold fs-5 shadow">
            Select File
          </button>
        </div>
        <p className="text-muted small mt-4 mb-0">
          <i className="bi bi-shield-lock-fill text-success"></i> Files are
          securely processed and deleted after 1 hour.
        </p>
      </div>
    </div>
  );
}

export default ToolPage;
