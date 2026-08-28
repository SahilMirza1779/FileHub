import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import logo from "../assets/logo.jpg";

function Header() {
  // Yahan humne language ko track karne ke liye ek state banayi hai
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container-fluid px-4">
        {/* Logo and Brand Name */}
        <Link
          className="navbar-brand d-flex align-items-center fw-bold text-dark fs-4"
          to="/"
        >
          <img
            src={logo}
            alt="FileHub Logo"
            width="40"
            height="40"
            className="me-2 rounded"
          />
          FileHub
        </Link>

        {/* Mobile menu toggle button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            className="navbar-nav mx-auto fw-semibold"
            style={{ fontSize: "15px" }}
          >
            <li className="nav-item">
              <Link className="nav-link text-primary" to="/">
                Home
              </Link>
            </li>

            {/* PDF Tools Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-dark"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                PDF Tools
              </a>
              <ul className="dropdown-menu border-0 shadow-sm mt-2 rounded-3">
                <li>
                  <Link className="dropdown-item py-2" to="/tool/pdf-to-word">
                    <i className="bi bi-file-earmark-word text-primary me-2"></i>
                    PDF to Word
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item py-2" to="/tool/merge-pdf">
                    <i className="bi bi-files text-purple me-2"></i>Merge PDF
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item py-2" to="/tool/edit-pdf">
                    <i className="bi bi-pencil-square text-success me-2"></i>
                    Edit PDF
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    className="dropdown-item py-2 text-primary"
                    to="/pdf-tools"
                  >
                    View All PDF Tools
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark" to="/form-builder">
                Form Builder
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/templates">
                Templates
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/ai-tools">
                AI Tools
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/business-tools">
                Business Tools
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/pricing">
                Pricing
              </Link>
            </li>
          </ul>

          {/* Right Side Action Buttons */}
          <div className="d-flex align-items-center gap-4 mt-3 mt-lg-0">
            {/* --- NAYA LANGUAGE DROPDOWN YAHAN HAI --- */}
            <div className="dropdown">
              <span
                className="fw-semibold text-dark d-flex align-items-center dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ cursor: "pointer", fontSize: "15px" }}
              >
                <i className="bi bi-globe me-1"></i> {language}
              </span>
              <ul
                className="dropdown-menu dropdown-menu-end border-0 shadow-sm mt-2 rounded-3"
                style={{ minWidth: "130px" }}
              >
                <li>
                  <button
                    className="dropdown-item py-2"
                    onClick={() => setLanguage("EN")}
                  >
                    English (EN)
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item py-2"
                    onClick={() => setLanguage("HI")}
                  >
                    Hindi (HI)
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item py-2"
                    onClick={() => setLanguage("GU")}
                  >
                    Gujarati (GU)
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item py-2"
                    onClick={() => setLanguage("MR")}
                  >
                    Marathi (MR)
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item py-2"
                    onClick={() => setLanguage("UR")}
                  >
                    Urdu (UR)
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item py-2"
                    onClick={() => setLanguage("AR")}
                  >
                    Arabic (AR)
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item py-2"
                    onClick={() => setLanguage("ES")}
                  >
                    Español (ES)
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item py-2"
                    onClick={() => setLanguage("FR")}
                  >
                    Français (FR)
                  </button>
                </li>
              </ul>
            </div>
            {/* ---------------------------------------- */}

            <Link
              to="/login"
              className="text-dark text-decoration-none fw-semibold"
              style={{ fontSize: "15px" }}
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="btn btn-primary rounded-pill px-4 py-2 fw-semibold"
              style={{ fontSize: "15px" }}
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
