import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-auto border-top">
      <div className="container px-4">
        <div className="row g-4 mb-5">
          {/* Brand Info & Newsletter */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center mb-3">
              <img
                src={logo}
                alt="FileHub Logo"
                width="35"
                height="35"
                className="me-2 rounded shadow-sm"
              />
              <span className="fw-bold fs-4 text-white">FileHub</span>
            </div>
            <p
              className="text-secondary small mb-4"
              style={{ lineHeight: "1.7" }}
            >
              Everything you need to work with files. Edit, convert, organize,
              secure, and automate your documents smarter and faster.
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-secondary fs-5 hover-light"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-secondary fs-5 hover-light"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-secondary fs-5 hover-light"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-secondary fs-5 hover-light"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>

          {/* Products Links */}
          <div className="col-lg-2 col-md-3 col-6">
            <h6
              className="fw-bold text-white mb-3"
              style={{ letterSpacing: "0.5px" }}
            >
              Products
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li>
                <Link
                  to="/pdf-tools"
                  className="text-secondary text-decoration-none hover-light"
                >
                  PDF Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/form-builder"
                  className="text-secondary text-decoration-none hover-light"
                >
                  Form Builder
                </Link>
              </li>
              <li>
                <Link
                  to="/ai-tools"
                  className="text-secondary text-decoration-none hover-light"
                >
                  AI Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/templates"
                  className="text-secondary text-decoration-none hover-light"
                >
                  Templates
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div className="col-lg-2 col-md-3 col-6">
            <h6
              className="fw-bold text-white mb-3"
              style={{ letterSpacing: "0.5px" }}
            >
              Solutions
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li>
                <Link
                  to="/business-tools"
                  className="text-secondary text-decoration-none hover-light"
                >
                  Business Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/automations"
                  className="text-secondary text-decoration-none hover-light"
                >
                  Automations
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-secondary text-decoration-none hover-light"
                >
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="text-secondary text-decoration-none hover-light"
                >
                  User Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription Box */}
          <div className="col-lg-4 col-md-12">
            <h6
              className="fw-bold text-white mb-3"
              style={{ letterSpacing: "0.5px" }}
            >
              Stay Updated
            </h6>
            <p className="text-secondary small mb-3">
              Subscribe to our newsletter for the latest PDF and AI feature
              updates.
            </p>
            <div className="input-group">
              <input
                type="email"
                className="form-control bg-secondary bg-opacity-25 border-0 text-white px-3 py-2 shadow-none"
                placeholder="Enter your email"
                style={{ fontSize: "14px" }}
              />
              <button
                className="btn btn-primary px-3 fw-bold"
                type="button"
                style={{ fontSize: "14px" }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="border-top border-secondary border-opacity-25 pt-4 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <p className="text-secondary small mb-0">
            &copy; 2026 FileHub Technologies Inc. All rights reserved.
          </p>
          <div className="d-flex gap-4 small text-secondary">
            <a
              href="#"
              className="text-decoration-none text-secondary hover-light"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-decoration-none text-secondary hover-light"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-decoration-none text-secondary hover-light"
            >
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
