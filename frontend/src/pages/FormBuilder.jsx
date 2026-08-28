import { Link } from "react-router-dom";

function FormBuilder() {
  return (
    <div className="container-fluid bg-light min-vh-100 p-0">
      {/* Top Navbar */}
      <div className="bg-white border-bottom p-3 d-flex justify-content-between align-items-center shadow-sm">
        <div className="d-flex align-items-center">
          <Link to="/" className="text-secondary me-3">
            <i className="bi bi-arrow-left fs-5"></i>
          </Link>
          <h5 className="mb-0 fw-bold text-dark">Untitled Form</h5>
        </div>
        <div>
          <button className="btn btn-outline-secondary me-3 fw-semibold">
            Preview
          </button>
          <button className="btn btn-primary fw-bold shadow-sm">
            Save & Publish
          </button>
        </div>
      </div>

      <div className="row g-0">
        {/* Left Sidebar: Tool Palette */}
        <div
          className="col-md-3 col-lg-2 bg-white border-end p-4"
          style={{ minHeight: "calc(100vh - 70px)" }}
        >
          <h6 className="fw-bold mb-4 text-muted small letter-spacing-1">
            FORM FIELDS
          </h6>
          <div className="d-grid gap-3">
            <button className="btn btn-light border text-start py-2 fw-semibold shadow-sm">
              <i className="bi bi-fonts me-2 text-primary"></i> Short Text
            </button>
            <button className="btn btn-light border text-start py-2 fw-semibold shadow-sm">
              <i className="bi bi-textarea-t me-2 text-primary"></i> Long Text
            </button>
            <button className="btn btn-light border text-start py-2 fw-semibold shadow-sm">
              <i className="bi bi-envelope me-2 text-success"></i> Email
            </button>
            <button className="btn btn-light border text-start py-2 fw-semibold shadow-sm">
              <i className="bi bi-ui-radios me-2 text-warning"></i> Multiple
              Choice
            </button>
            <button className="btn btn-light border text-start py-2 fw-semibold shadow-sm">
              <i className="bi bi-check2-square me-2 text-info"></i> Checkboxes
            </button>
            <button className="btn btn-light border text-start py-2 fw-semibold shadow-sm">
              <i className="bi bi-caret-down-square me-2 text-secondary"></i>{" "}
              Dropdown
            </button>
            <button className="btn btn-light border text-start py-2 fw-semibold shadow-sm">
              <i className="bi bi-cloud-upload me-2 text-danger"></i> File
              Upload
            </button>
          </div>
        </div>

        {/* Right Canvas: Drop Zone */}
        <div className="col-md-9 col-lg-10 p-4 p-md-5">
          <div
            className="card border-2 border-primary border-dashed rounded-4 p-5 text-center d-flex align-items-center justify-content-center shadow-sm"
            style={{
              backgroundColor: "#f8faff",
              borderStyle: "dashed",
              minHeight: "65vh",
            }}
          >
            <div>
              <div className="text-primary mb-3">
                <i
                  className="bi bi-plus-circle-dotted"
                  style={{ fontSize: "4rem" }}
                ></i>
              </div>
              <h3 className="fw-bold text-dark">Drag and drop fields here</h3>
              <p className="text-muted fs-5">
                Build your form by dragging elements from the left panel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormBuilder;
