import { Link } from "react-router-dom";
// Please check the correct name and extension of your image in the line below.
import heroImage from "../assets/hero-image.png";

function Home() {
  return (
    <div className="container mt-5 pt-4">
      <div className="row align-items-center">
        {/* Left Side: Text and Buttons */}
        <div className="col-lg-6 mb-5 mb-lg-0">
          <span className="badge bg-light text-primary border rounded-pill px-3 py-2 mb-3 fw-semibold">
            All-in-One File & Document Solution
          </span>
          <h1
            className="display-4 fw-bolder text-dark mb-4"
            style={{ lineHeight: "1.2" }}
          >
            Everything You Need to Work with Files.{" "}
            <span className="text-primary">Smarter.</span>
          </h1>
          <p className="lead text-secondary mb-4" style={{ fontSize: "18px" }}>
            Edit, convert, organize, secure, and automate your documents with
            powerful tools trusted by millions of users worldwide.
          </p>

          <div className="d-flex flex-wrap gap-3 mb-4">
            <Link
              to="/signup"
              className="btn btn-primary rounded-pill px-4 py-3 fw-bold shadow-sm d-flex align-items-center"
            >
              Get Started Free <i className="bi bi-arrow-right ms-2"></i>
            </Link>
            <Link
              to="/tools"
              className="btn btn-light rounded-pill px-4 py-3 fw-bold border d-flex align-items-center"
            >
              <i className="bi bi-grid-3x3-gap me-2"></i> Explore Tools
            </Link>
          </div>

          {/* Features Checkmarks */}
          <div
            className="d-flex flex-wrap gap-3 text-muted"
            style={{ fontSize: "14px" }}
          >
            <span className="d-flex align-items-center">
              <i className="bi bi-check-circle-fill text-primary me-2"></i> No
              credit card required
            </span>
            <span className="d-flex align-items-center">
              <i className="bi bi-check-circle-fill text-primary me-2"></i> Free
              forever plan
            </span>
            <span className="d-flex align-items-center">
              <i className="bi bi-check-circle-fill text-primary me-2"></i>{" "}
              Secure & Private
            </span>
          </div>
        </div>

        {/* Right Side: Hero Image */}
        <div className="col-lg-6 text-center">
          <img
            src={heroImage}
            alt="FileHub Dashboard Illustration"
            className="img-fluid"
            style={{
              maxWidth: "90%",
              animation: "floating 3s ease-in-out infinite",
            }}
          />
        </div>
      </div>
      {/* --- YAHAN SE NAYA CODE START HAI --- */}

      {/* 4 Feature Cards Section */}
      <div className="row mt-5 pt-4">
        <div className="col-12">
          <div
            className="card border-0 shadow-sm rounded-4 p-4"
            style={{ backgroundColor: "#f8f9fa" }}
          >
            <div className="row g-4 text-center text-md-start">
              {/* Card 1: PDF Tools */}
              <div className="col-md-3 border-end-md">
                <div className="d-flex flex-column align-items-center align-items-md-start px-2">
                  <div className="bg-danger bg-opacity-10 text-danger p-3 rounded-3 mb-3">
                    <i className="bi bi-file-earmark-pdf-fill fs-5"></i>
                  </div>
                  <h6 className="fw-bold">PDF Tools</h6>
                  <p className="text-muted small mb-2">
                    Convert, merge, split, compress & more
                  </p>
                  <Link
                    to="/pdf-tools"
                    className="text-decoration-none fw-semibold small text-primary"
                  >
                    Explore &rarr;
                  </Link>
                </div>
              </div>

              {/* Card 2: AI Tools */}
              <div className="col-md-3 border-end-md">
                <div className="d-flex flex-column align-items-center align-items-md-start px-2">
                  <div
                    className="bg-purple p-3 rounded-3 mb-3"
                    style={{ backgroundColor: "#f3e8ff", color: "#8a2be2" }}
                  >
                    <i className="bi bi-magic fs-5"></i>
                  </div>
                  <h6 className="fw-bold">AI Tools</h6>
                  <p className="text-muted small mb-2">
                    Summarize, analyze, translate & chat
                  </p>
                  <Link
                    to="/ai-tools"
                    className="text-decoration-none fw-semibold small text-primary"
                  >
                    Explore &rarr;
                  </Link>
                </div>
              </div>

              {/* Card 3: Form Builder */}
              <div className="col-md-3 border-end-md">
                <div className="d-flex flex-column align-items-center align-items-md-start px-2">
                  <div className="bg-info bg-opacity-10 text-info p-3 rounded-3 mb-3">
                    <i className="bi bi-ui-checks fs-5"></i>
                  </div>
                  <h6 className="fw-bold">Form Builder</h6>
                  <p className="text-muted small mb-2">
                    Create smart forms in minutes
                  </p>
                  <Link
                    to="/form-builder"
                    className="text-decoration-none fw-semibold small text-primary"
                  >
                    Explore &rarr;
                  </Link>
                </div>
              </div>

              {/* Card 4: Templates */}
              <div className="col-md-3">
                <div className="d-flex flex-column align-items-center align-items-md-start px-2">
                  <div className="bg-warning bg-opacity-10 text-warning p-3 rounded-3 mb-3">
                    <i className="bi bi-layout-text-window-reverse fs-5"></i>
                  </div>
                  <h6 className="fw-bold">Templates</h6>
                  <p className="text-muted small mb-2">
                    Professional templates for every need
                  </p>
                  <Link
                    to="/templates"
                    className="text-decoration-none fw-semibold small text-primary"
                  >
                    Explore &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="row mt-5 pt-4 pb-5 text-center">
        <div className="col-md-3 col-6 mb-4 d-flex justify-content-center align-items-center gap-2">
          <i className="bi bi-people-fill text-primary fs-3"></i>
          <div className="text-start">
            <h4 className="fw-bolder mb-0">10M+</h4>
            <p className="text-muted small mb-0">Happy Users</p>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-4 d-flex justify-content-center align-items-center gap-2">
          <i className="bi bi-file-earmark-text-fill text-info fs-3"></i>
          <div className="text-start">
            <h4 className="fw-bolder mb-0">50M+</h4>
            <p className="text-muted small mb-0">Files Processed</p>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-4 d-flex justify-content-center align-items-center gap-2">
          <i className="bi bi-shield-check text-success fs-3"></i>
          <div className="text-start">
            <h4 className="fw-bolder mb-0">100%</h4>
            <p className="text-muted small mb-0">Secure & Private</p>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-4 d-flex justify-content-center align-items-center gap-2">
          <i className="bi bi-globe text-secondary fs-3"></i>
          <div className="text-start">
            <h4 className="fw-bolder mb-0">200+</h4>
            <p className="text-muted small mb-0">Countries</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
