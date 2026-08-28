import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="container mt-5 pt-5 pb-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card border-0 shadow-lg rounded-4 p-4 p-md-5">
            <div className="text-center mb-4">
              <h2 className="fw-bolder text-dark">Create an Account</h2>
              <p className="text-muted">Join FileHub and work smarter.</p>
            </div>

            <form>
              <div className="mb-3">
                <label className="form-label fw-semibold">Full Name</label>
                <input
                  type="text"
                  className="form-control form-control-lg bg-light border-0"
                  placeholder="Sahil Mirza"
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Email address</label>
                <input
                  type="email"
                  className="form-control form-control-lg bg-light border-0"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-4">
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  className="form-control form-control-lg bg-light border-0"
                  placeholder="Create a strong password"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg w-100 rounded-pill fw-bold shadow-sm"
              >
                Get Started Free
              </button>
            </form>

            <div className="text-center mt-4">
              <p className="text-muted mb-0">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primary text-decoration-none fw-semibold"
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
