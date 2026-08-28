import { useState } from "react";
import { Link } from "react-router-dom";

function Pricing() {
  // Monthly aur Yearly toggle track karne ke liye state
  const [isYearly, setIsYearly] = useState(true);

  return (
    <div className="container mt-5 pt-4 pb-5">
      {/* Header & Toggle Section */}
      <div className="text-center mb-5">
        <h1 className="fw-bolder text-dark display-5">
          Simple, transparent pricing
        </h1>
        <p className="text-muted fs-5 mt-2">
          Choose the perfect plan for your document needs.
        </p>

        <div className="d-flex justify-content-center align-items-center mt-5">
          <span
            className={`fw-semibold ${!isYearly ? "text-dark" : "text-muted"}`}
          >
            Monthly
          </span>
          <div
            className="form-check form-switch mx-3"
            style={{ transform: "scale(1.5)" }}
          >
            <input
              className="form-check-input shadow-none border-primary"
              type="checkbox"
              role="switch"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
              style={{
                cursor: "pointer",
                backgroundColor: isYearly ? "#0d6efd" : "#e9ecef",
              }}
            />
          </div>
          <span
            className={`fw-semibold ${isYearly ? "text-dark" : "text-muted"}`}
          >
            Yearly{" "}
            <span className="badge bg-success ms-1 rounded-pill small">
              Save 20%
            </span>
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="row g-4 align-items-center justify-content-center">
        {/* Free Plan */}
        <div className="col-lg-4 col-md-6">
          <div
            className="card border-0 shadow-sm rounded-4 h-100 p-4"
            style={{ transition: "transform 0.3s" }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <h4 className="fw-bold text-dark">Basic</h4>
            <p className="text-muted small mb-4">
              Essential tools for individuals.
            </p>
            <h2 className="fw-bolder mb-3">
              $0<span className="fs-6 text-muted fw-normal">/mo</span>
            </h2>
            <Link
              to="/signup"
              className="btn btn-outline-primary fw-bold rounded-pill w-100 py-3 mb-4"
            >
              Get Started Free
            </Link>
            <ul className="list-unstyled mb-0">
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-primary me-3 fs-5"></i>{" "}
                Up to 5 PDF tasks/day
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-primary me-3 fs-5"></i>{" "}
                Max file size 50MB
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-primary me-3 fs-5"></i>{" "}
                Basic Form Builder
              </li>
              <li className="text-muted d-flex align-items-center">
                <i className="bi bi-x-circle me-3 fs-5"></i> No AI Tools
              </li>
            </ul>
          </div>
        </div>

        {/* Pro Plan (Highlighted) */}
        <div className="col-lg-4 col-md-6">
          <div
            className="card border-primary border-2 shadow-lg rounded-4 h-100 p-4 position-relative"
            style={{
              backgroundColor: "#f8faff",
              transform: "scale(1.05)",
              zIndex: 1,
            }}
          >
            <div className="position-absolute top-0 start-50 translate-middle">
              <span
                className="badge bg-primary rounded-pill px-3 py-2 text-uppercase shadow-sm"
                style={{ letterSpacing: "1px" }}
              >
                Most Popular
              </span>
            </div>
            <h4 className="fw-bold text-primary mt-2">Pro</h4>
            <p className="text-muted small mb-4">
              Advanced tools for professionals.
            </p>

            {/* Dynamic Price based on Toggle */}
            <h2 className="fw-bolder mb-3">
              ${isYearly ? "9" : "12"}
              <span className="fs-6 text-muted fw-normal">/mo</span>
            </h2>

            <Link
              to="/signup"
              className="btn btn-primary fw-bold rounded-pill w-100 py-3 mb-4 shadow-sm"
            >
              Start 7-Day Trial
            </Link>
            <ul className="list-unstyled mb-0">
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-primary me-3 fs-5"></i>{" "}
                Unlimited PDF tasks
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-primary me-3 fs-5"></i>{" "}
                Max file size 2GB
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-primary me-3 fs-5"></i>{" "}
                Advanced Form Builder
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-primary me-3 fs-5"></i>{" "}
                Full AI Tools Access
              </li>
              <li className="d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-primary me-3 fs-5"></i>{" "}
                Premium Templates
              </li>
            </ul>
          </div>
        </div>

        {/* Business Plan */}
        <div className="col-lg-4 col-md-6">
          <div
            className="card border-0 shadow-sm rounded-4 h-100 p-4"
            style={{ transition: "transform 0.3s" }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <h4 className="fw-bold text-dark">Business</h4>
            <p className="text-muted small mb-4">
              For teams needing collaboration.
            </p>
            <h2 className="fw-bolder mb-3">
              ${isYearly ? "24" : "29"}
              <span className="fs-6 text-muted fw-normal">/mo</span>
            </h2>
            <Link
              to="/signup"
              className="btn btn-outline-dark fw-bold rounded-pill w-100 py-3 mb-4"
            >
              Contact Sales
            </Link>
            <ul className="list-unstyled mb-0">
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-primary me-3 fs-5"></i>{" "}
                Everything in Pro
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-primary me-3 fs-5"></i>{" "}
                Team Workspaces
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-primary me-3 fs-5"></i>{" "}
                Custom Branding
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-primary me-3 fs-5"></i>{" "}
                API Access
              </li>
              <li className="d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-primary me-3 fs-5"></i>{" "}
                Priority Support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
