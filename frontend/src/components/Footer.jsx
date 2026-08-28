import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Footer() {
  return (
    <footer className="bg-light pt-5 pb-4 border-top mt-5">
      <div className="container">
        <div className="row text-md-start text-center">
          {/* Brand & Description */}
          <div className="col-md-4 mb-4">
            <Link
              to="/"
              className="text-decoration-none d-flex align-items-center justify-content-md-start justify-content-center mb-3"
            >
              <img
                src={logo}
                alt="FileHub Logo"
                width="30"
                height="30"
                className="me-2 rounded"
              />
              <span className="fw-bold text-dark fs-5">FileHub</span>
            </Link>
            <p className="text-muted small pr-md-5">
              Everything you need to work with files. Edit, convert, organize,
              secure, and automate your documents smarter and faster.
            </p>
            <div className="d-flex gap-3 justify-content-md-start justify-content-center mt-3">
              <a href="#" className="text-secondary fs-5">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-secondary fs-5">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="text-secondary fs-5">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold text-dark mb-3">Products</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <Link
                  to="/pdf-tools"
                  className="text-muted text-decoration-none"
                >
                  PDF Tools
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/ai-tools"
                  className="text-muted text-decoration-none"
                >
                  AI Tools
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/form-builder"
                  className="text-muted text-decoration-none"
                >
                  Form Builder
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/templates"
                  className="text-muted text-decoration-none"
                >
                  Templates
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold text-dark mb-3">Solutions</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <Link
                  to="/business-tools"
                  className="text-muted text-decoration-none"
                >
                  For Business
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-muted text-decoration-none">
                  For Education
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/pricing" className="text-muted text-decoration-none">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold text-dark mb-3">Company</h6>
            <ul className="list-unstyled small">
              <li className="mb-2">
                <Link to="#" className="text-muted text-decoration-none">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-muted text-decoration-none">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-muted text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="text-muted my-4" />

        <div className="row">
          <div className="col-12 text-center text-muted small">
            &copy; {new Date().getFullYear()} FileHub. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
