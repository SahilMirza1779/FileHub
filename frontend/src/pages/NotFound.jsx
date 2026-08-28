import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center text-center min-vh-100">
      <h1
        className="display-1 fw-bolder text-primary mb-0"
        style={{ fontSize: "10rem" }}
      >
        404
      </h1>
      <h2 className="fw-bold text-dark mb-3">Oops! Page Not Found</h2>
      <p className="text-muted fs-5 mb-5" style={{ maxWidth: "500px" }}>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold shadow-sm"
      >
        <i className="bi bi-house-door-fill me-2"></i> Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
