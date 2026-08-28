function BusinessTools() {
  // Paid users ka mock data
  const paidUsers = [
    {
      id: 1,
      name: "Rahul Verma",
      company: "TechCorp",
      plan: "Business",
      amount: "$29/mo",
      status: "Active",
    },
    {
      id: 2,
      name: "Sneha Sharma",
      company: "Freelancer",
      plan: "Pro",
      amount: "$9/mo",
      status: "Active",
    },
    {
      id: 3,
      name: "Amit Patel",
      company: "DesignStudio",
      plan: "Pro",
      amount: "$12/mo",
      status: "Pending",
    },
    {
      id: 4,
      name: "Priya Singh",
      company: "Global Solutions",
      plan: "Business",
      amount: "$24/mo",
      status: "Active",
    },
  ];

  return (
    <div
      className="container mt-5 pt-4 pb-5"
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "80vh",
        borderRadius: "1rem",
      }}
    >
      {/* Dashboard Header */}
      <div className="d-flex justify-content-between align-items-center mb-5 px-3">
        <div>
          <h2 className="fw-bolder text-dark mb-1">Business Dashboard</h2>
          <p className="text-muted mb-0">
            Monitor your traffic, revenue, and paid users.
          </p>
        </div>
        <div>
          <button className="btn btn-outline-primary fw-semibold me-2">
            <i className="bi bi-download me-1"></i> Export Report
          </button>
          <button className="btn btn-primary fw-bold">
            <i className="bi bi-plus-lg me-1"></i> Invite Team
          </button>
        </div>
      </div>

      {/* Top Quick Stats */}
      <div className="row g-4 px-3 mb-5">
        <div className="col-md-3 col-sm-6">
          <div className="card border-0 shadow-sm rounded-4 p-4 h-100 border-bottom border-primary border-4">
            <p className="text-muted small fw-bold text-uppercase mb-2">
              Total Traffic (30 Days)
            </p>
            <h3 className="fw-bolder mb-0">
              124.5K{" "}
              <span className="text-success fs-6 fw-semibold">
                <i className="bi bi-arrow-up-right"></i> 12%
              </span>
            </h3>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card border-0 shadow-sm rounded-4 p-4 h-100 border-bottom border-success border-4">
            <p className="text-muted small fw-bold text-uppercase mb-2">
              Active Paid Users
            </p>
            <h3 className="fw-bolder mb-0">
              2,450{" "}
              <span className="text-success fs-6 fw-semibold">
                <i className="bi bi-arrow-up-right"></i> 5%
              </span>
            </h3>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card border-0 shadow-sm rounded-4 p-4 h-100 border-bottom border-warning border-4">
            <p className="text-muted small fw-bold text-uppercase mb-2">
              Monthly Revenue
            </p>
            <h3 className="fw-bolder mb-0">
              $34,200{" "}
              <span className="text-success fs-6 fw-semibold">
                <i className="bi bi-arrow-up-right"></i> 8%
              </span>
            </h3>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="card border-0 shadow-sm rounded-4 p-4 h-100 border-bottom border-danger border-4">
            <p className="text-muted small fw-bold text-uppercase mb-2">
              Bounce Rate
            </p>
            <h3 className="fw-bolder mb-0">
              22.4%{" "}
              <span className="text-danger fs-6 fw-semibold">
                <i className="bi bi-arrow-down-right"></i> 2%
              </span>
            </h3>
          </div>
        </div>
      </div>

      <div className="row g-4 px-3">
        {/* Left Side: Traffic Insights (Mock Chart Area) */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
            <h5 className="fw-bold mb-4">Traffic Sources</h5>

            <div className="mb-4">
              <div className="d-flex justify-content-between mb-1">
                <span className="fw-semibold text-secondary">
                  Organic Search
                </span>
                <span className="fw-bold text-dark">65%</span>
              </div>
              <div className="progress" style={{ height: "8px" }}>
                <div
                  className="progress-bar bg-primary"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>

            <div className="mb-4">
              <div className="d-flex justify-content-between mb-1">
                <span className="fw-semibold text-secondary">Direct</span>
                <span className="fw-bold text-dark">20%</span>
              </div>
              <div className="progress" style={{ height: "8px" }}>
                <div
                  className="progress-bar bg-success"
                  style={{ width: "20%" }}
                ></div>
              </div>
            </div>

            <div className="mb-4">
              <div className="d-flex justify-content-between mb-1">
                <span className="fw-semibold text-secondary">Social Media</span>
                <span className="fw-bold text-dark">10%</span>
              </div>
              <div className="progress" style={{ height: "8px" }}>
                <div
                  className="progress-bar bg-warning"
                  style={{ width: "10%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="d-flex justify-content-between mb-1">
                <span className="fw-semibold text-secondary">Referrals</span>
                <span className="fw-bold text-dark">5%</span>
              </div>
              <div className="progress" style={{ height: "8px" }}>
                <div
                  className="progress-bar bg-danger"
                  style={{ width: "5%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Paid Users Table */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="fw-bold mb-0">Recent Paid Users</h5>
              <a
                href="#"
                className="text-decoration-none text-primary fw-semibold small"
              >
                View All Users
              </a>
            </div>

            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light text-muted small text-uppercase">
                  <tr>
                    <th className="fw-semibold rounded-start ps-3">
                      User / Company
                    </th>
                    <th className="fw-semibold">Plan</th>
                    <th className="fw-semibold">MRR</th>
                    <th className="fw-semibold rounded-end">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {paidUsers.map((user) => (
                    <tr key={user.id}>
                      <td className="ps-3 py-3">
                        <div className="fw-bold text-dark">{user.name}</div>
                        <div className="text-muted small">{user.company}</div>
                      </td>
                      <td>
                        <span
                          className={`badge ${user.plan === "Pro" ? "bg-primary" : "bg-dark"} bg-opacity-10 ${user.plan === "Pro" ? "text-primary" : "text-dark"} border`}
                        >
                          {user.plan}
                        </span>
                      </td>
                      <td className="fw-semibold">{user.amount}</td>
                      <td>
                        {user.status === "Active" ? (
                          <span className="text-success small fw-bold">
                            <i className="bi bi-check-circle-fill me-1"></i>{" "}
                            Active
                          </span>
                        ) : (
                          <span className="text-warning small fw-bold">
                            <i className="bi bi-clock-fill me-1"></i> Pending
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessTools;
