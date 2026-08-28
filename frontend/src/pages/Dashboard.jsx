import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container mt-5 pt-4 pb-5">
      <div className="row g-4">
        {/* Sidebar / Profile Summary */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm rounded-4 p-4 text-center h-100">
            <div
              className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
              style={{ width: "80px", height: "80px", fontSize: "2rem" }}
            >
              SM
            </div>
            <h4 className="fw-bold">Sahil Mirza</h4>
            <p className="text-muted mb-4">sahil@example.com</p>

            <div className="p-3 bg-light rounded-3 text-start mb-4">
              <span className="badge bg-primary mb-2">Pro Plan</span>
              <p className="small text-muted mb-1">Your plan renews on</p>
              <h6 className="fw-bold">Sept 28, 2026</h6>
            </div>

            <button className="btn btn-outline-primary w-100 rounded-pill fw-semibold mb-2">
              Edit Profile
            </button>
            <Link
              to="/pricing"
              className="btn btn-primary w-100 rounded-pill fw-semibold"
            >
              Upgrade Plan
            </Link>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
            <h5 className="fw-bold mb-4">Quick Actions</h5>
            <div className="d-flex gap-3 flex-wrap">
              <Link
                to="/tool/pdf-to-word"
                className="btn btn-light border flex-grow-1 py-3 fw-semibold hover-effect"
              >
                <i className="bi bi-file-earmark-word text-primary me-2 fs-5"></i>{" "}
                Convert PDF
              </Link>
              <Link
                to="/form-builder"
                className="btn btn-light border flex-grow-1 py-3 fw-semibold hover-effect"
              >
                <i className="bi bi-ui-radios text-success me-2 fs-5"></i> Build
                Form
              </Link>
              <Link
                to="/ai-tools"
                className="btn btn-light border flex-grow-1 py-3 fw-semibold hover-effect"
              >
                <i className="bi bi-magic text-purple me-2 fs-5"></i> Ask AI
              </Link>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-4 p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="fw-bold mb-0">Recent Files</h5>
              <a
                href="#"
                className="text-decoration-none text-primary small fw-semibold"
              >
                View All
              </a>
            </div>
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light small text-uppercase text-muted">
                  <tr>
                    <th className="rounded-start">File Name</th>
                    <th>Date</th>
                    <th>Size</th>
                    <th className="rounded-end text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="fw-semibold">
                      <i className="bi bi-file-pdf text-danger me-2"></i>{" "}
                      Q3_Report.pdf
                    </td>
                    <td className="text-muted small">Today, 2:30 PM</td>
                    <td className="text-muted small">2.4 MB</td>
                    <td className="text-end">
                      <button className="btn btn-sm btn-light border rounded-pill">
                        <i className="bi bi-download"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-semibold">
                      <i className="bi bi-file-word text-primary me-2"></i>{" "}
                      Invoice_#1042.docx
                    </td>
                    <td className="text-muted small">Yesterday</td>
                    <td className="text-muted small">850 KB</td>
                    <td className="text-end">
                      <button className="btn btn-sm btn-light border rounded-pill">
                        <i className="bi bi-download"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
