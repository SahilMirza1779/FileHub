import { useState } from "react";

function Automations() {
  // Integrations ka dummy data
  const [integrations, setIntegrations] = useState([
    {
      id: 1,
      name: "Google Drive",
      desc: "Automatically save converted files to your Drive.",
      icon: "bi-google",
      color: "text-danger",
      connected: true,
    },
    {
      id: 2,
      name: "Dropbox",
      desc: "Sync your PDF documents directly with Dropbox.",
      icon: "bi-dropbox",
      color: "text-primary",
      connected: false,
    },
    {
      id: 3,
      name: "Slack",
      desc: "Get instant notifications when team members upload files.",
      icon: "bi-slack",
      color: "text-info",
      connected: true,
    },
    {
      id: 4,
      name: "Zapier",
      desc: "Connect FileHub with 5000+ apps to automate workflows.",
      icon: "bi-lightning-fill",
      color: "text-warning",
      connected: false,
    },
    {
      id: 5,
      name: "OneDrive",
      desc: "Import and export files seamlessly with Microsoft OneDrive.",
      icon: "bi-windows",
      color: "text-primary",
      connected: false,
    },
    {
      id: 6,
      name: "Trello",
      desc: "Attach form responses directly to your Trello cards.",
      icon: "bi-trello",
      color: "text-info",
      connected: false,
    },
  ]);

  const toggleConnection = (id) => {
    setIntegrations(
      integrations.map((app) =>
        app.id === id ? { ...app, connected: !app.connected } : app,
      ),
    );
  };

  return (
    <div className="container mt-5 pt-4 pb-5">
      <div className="text-center mb-5">
        <h1 className="fw-bolder text-dark display-5">
          Automation & Integrations
        </h1>
        <p className="text-muted fs-5 mt-2">
          Connect FileHub with your favorite tools to automate your daily
          workflows.
        </p>
      </div>

      <div className="row g-4">
        {integrations.map((app) => (
          <div className="col-lg-4 col-md-6" key={app.id}>
            <div
              className="card h-100 border-0 shadow-sm rounded-4 p-4 hover-effect"
              style={{ transition: "transform 0.2s" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div
                  className={`bg-light rounded-3 d-flex align-items-center justify-content-center border`}
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className={`bi ${app.icon} fs-2 ${app.color}`}></i>
                </div>
                <span
                  className={`badge rounded-pill ${app.connected ? "bg-success bg-opacity-10 text-success border border-success" : "bg-light text-muted border"}`}
                >
                  {app.connected ? "Connected" : "Not Connected"}
                </span>
              </div>

              <h5 className="fw-bold text-dark">{app.name}</h5>
              <p className="text-muted small mb-4 flex-grow-1">{app.desc}</p>

              <button
                onClick={() => toggleConnection(app.id)}
                className={`btn fw-semibold w-100 rounded-pill ${app.connected ? "btn-outline-danger" : "btn-primary"}`}
              >
                {app.connected ? "Disconnect" : "Connect App"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Automations;
