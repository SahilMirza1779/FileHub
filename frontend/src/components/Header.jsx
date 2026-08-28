import { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import logo from "../assets/logo.jpg";

function Header() {
  const { language, setLanguage } = useContext(LanguageContext);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Fake Authentication State (Testing ke liye)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <div
        className="text-white text-center py-2 fw-semibold"
        style={{
          fontSize: "13px",
          background: "linear-gradient(90deg, #0d6efd 0%, #8a2be2 100%)",
          letterSpacing: "0.5px",
        }}
      >
        <span className="badge bg-white text-primary me-2 rounded-pill shadow-sm">
          NEW
        </span>
        FileHub AI is now live!{" "}
        <Link
          to="/ai-tools"
          className="text-white ms-2 text-decoration-underline"
        >
          Try it for free <i className="bi bi-arrow-right"></i>
        </Link>
      </div>

      <nav
        className={`navbar navbar-expand-lg navbar-light sticky-top transition-all ${isScrolled ? "shadow-sm bg-white bg-opacity-90" : "bg-white"}`}
        style={isScrolled ? { backdropFilter: "blur(10px)" } : {}}
      >
        <div className="container-fluid px-4 py-2">
          <Link
            className="navbar-brand d-flex align-items-center fw-bolder text-dark fs-4"
            to="/"
          >
            <img
              src={logo}
              alt="FileHub Logo"
              width="40"
              height="40"
              className="me-2 rounded shadow-sm"
            />
            FileHub
          </Link>

          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul
              className="navbar-nav mx-auto fw-semibold"
              style={{ fontSize: "15px" }}
            >
              <li className="nav-item">
                <Link
                  className={`nav-link px-3 ${isActive("/") ? "text-primary" : "text-dark"}`}
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle px-3 ${isActive("/pdf-tools") ? "text-primary" : "text-dark"}`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  PDF Tools
                </a>
                <ul
                  className="dropdown-menu border-0 shadow-lg mt-3 rounded-4 p-2"
                  style={{ minWidth: "320px" }}
                >
                  <li>
                    <Link
                      className="dropdown-item p-3 rounded-3 d-flex align-items-start"
                      to="/tool/pdf-to-word"
                      onMouseOver={(e) =>
                        (e.currentTarget.style.backgroundColor = "#f8f9fa")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.backgroundColor = "transparent")
                      }
                    >
                      <div className="bg-primary bg-opacity-10 text-primary rounded p-2 me-3">
                        <i className="bi bi-file-earmark-word fs-5"></i>
                      </div>
                      <div>
                        <div className="fw-bold text-dark">PDF to Word</div>
                        <div className="text-muted small">
                          Convert PDF to editable Word files.
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item p-3 rounded-3 d-flex align-items-start"
                      to="/tool/merge-pdf"
                      onMouseOver={(e) =>
                        (e.currentTarget.style.backgroundColor = "#f8f9fa")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.backgroundColor = "transparent")
                      }
                    >
                      <div
                        className="bg-purple bg-opacity-10 rounded p-2 me-3"
                        style={{ color: "#8a2be2", backgroundColor: "#f3e8ff" }}
                      >
                        <i className="bi bi-files fs-5"></i>
                      </div>
                      <div>
                        <div className="fw-bold text-dark">Merge PDF</div>
                        <div className="text-muted small">
                          Combine multiple PDFs into one.
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item p-3 rounded-3 d-flex align-items-start"
                      to="/tool/edit-pdf"
                      onMouseOver={(e) =>
                        (e.currentTarget.style.backgroundColor = "#f8f9fa")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.backgroundColor = "transparent")
                      }
                    >
                      <div className="bg-success bg-opacity-10 text-success rounded p-2 me-3">
                        <i className="bi bi-pencil-square fs-5"></i>
                      </div>
                      <div>
                        <div className="fw-bold text-dark">Edit PDF</div>
                        <div className="text-muted small">
                          Add text, shapes, and images.
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider my-2" />
                  </li>
                  <li>
                    <Link
                      className="dropdown-item p-3 text-center text-primary fw-bold rounded-3"
                      to="/pdf-tools"
                    >
                      View All 30+ PDF Tools{" "}
                      <i className="bi bi-arrow-right ms-1"></i>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle px-3 ${isActive("/form-builder") || isActive("/templates") || isActive("/ai-tools") ? "text-primary" : "text-dark"}`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Products
                </a>
                <ul
                  className="dropdown-menu border-0 shadow-lg mt-3 rounded-4 p-2"
                  style={{ minWidth: "220px" }}
                >
                  <li>
                    <Link
                      className={`dropdown-item py-2 px-3 rounded-3 mb-1 ${isActive("/form-builder") ? "bg-light text-primary fw-bold" : ""}`}
                      to="/form-builder"
                    >
                      <i className="bi bi-ui-radios me-3 text-success"></i>Form
                      Builder
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item py-2 px-3 rounded-3 mb-1 ${isActive("/templates") ? "bg-light text-primary fw-bold" : ""}`}
                      to="/templates"
                    >
                      <i className="bi bi-layout-text-window me-3 text-warning"></i>
                      Templates
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item py-2 px-3 rounded-3 ${isActive("/ai-tools") ? "bg-light text-primary fw-bold" : ""}`}
                      to="/ai-tools"
                    >
                      <i
                        className="bi bi-magic me-3"
                        style={{ color: "#8a2be2" }}
                      ></i>
                      AI Tools
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle px-3 ${isActive("/business-tools") || isActive("/automations") ? "text-primary" : "text-dark"}`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Solutions
                </a>
                <ul
                  className="dropdown-menu border-0 shadow-lg mt-3 rounded-4 p-2"
                  style={{ minWidth: "220px" }}
                >
                  <li>
                    <Link
                      className={`dropdown-item py-2 px-3 rounded-3 mb-1 ${isActive("/business-tools") ? "bg-light text-primary fw-bold" : ""}`}
                      to="/business-tools"
                    >
                      <i className="bi bi-briefcase me-3 text-primary"></i>
                      Business Tools
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item py-2 px-3 rounded-3 ${isActive("/automations") ? "bg-light text-primary fw-bold" : ""}`}
                      to="/automations"
                    >
                      <i className="bi bi-lightning-charge me-3 text-danger"></i>
                      Automations
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link px-3 ${isActive("/pricing") ? "text-primary" : "text-dark"}`}
                  to="/pricing"
                >
                  Pricing
                </Link>
              </li>
            </ul>

            <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0 border-start ps-lg-4">
              <div className="dropdown">
                <span
                  className="fw-semibold text-dark d-flex align-items-center dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ cursor: "pointer", fontSize: "14px" }}
                >
                  <i className="bi bi-globe me-1"></i> {language}
                </span>
                <ul
                  className="dropdown-menu dropdown-menu-end border-0 shadow-sm mt-4 rounded-3"
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
                </ul>
              </div>

              {/* Conditional Rendering: Login vs User Profile */}
              {isLoggedIn ? (
                <div className="dropdown">
                  <div
                    className="text-decoration-none d-flex align-items-center gap-2 p-1 pe-3 rounded-pill border bg-light hover-effect dropdown-toggle"
                    data-bs-toggle="dropdown"
                    style={{ cursor: "pointer", transition: "all 0.2s" }}
                  >
                    <div
                      className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold"
                      style={{
                        width: "32px",
                        height: "32px",
                        fontSize: "13px",
                      }}
                    >
                      SM
                    </div>
                    <span
                      className="fw-semibold text-dark"
                      style={{ fontSize: "14px" }}
                    >
                      Sahil
                    </span>
                  </div>
                  <ul
                    className="dropdown-menu dropdown-menu-end border-0 shadow-sm mt-3 rounded-3"
                    style={{ minWidth: "160px" }}
                  >
                    <li>
                      <Link
                        className="dropdown-item py-2 fw-semibold"
                        to="/dashboard"
                      >
                        <i className="bi bi-grid-1x2 text-primary me-2"></i>{" "}
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item py-2 fw-semibold"
                        to="/pricing"
                      >
                        <i className="bi bi-star-fill text-warning me-2"></i>{" "}
                        Upgrade
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button
                        className="dropdown-item py-2 text-danger fw-bold"
                        onClick={() => setIsLoggedIn(false)}
                      >
                        <i className="bi bi-box-arrow-right me-2"></i> Log out
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <>
                  {/* Clicking 'Log in' triggers the fake login for testing */}
                  <button
                    onClick={() => setIsLoggedIn(true)}
                    className="btn btn-link text-dark text-decoration-none fw-semibold p-0 m-0 ms-2"
                    style={{ fontSize: "14px" }}
                  >
                    Log in
                  </button>
                  <Link
                    to="/signup"
                    className="btn btn-primary rounded-pill px-4 py-2 fw-semibold shadow-sm ms-2"
                    style={{ fontSize: "14px" }}
                  >
                    Get Started Free
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
