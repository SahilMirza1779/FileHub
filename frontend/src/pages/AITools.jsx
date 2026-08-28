import { Link } from "react-router-dom";

function AITools() {
  const aiTools = [
    {
      id: 1,
      title: "Chat with PDF",
      desc: "Ask questions and get instant answers directly from your PDF documents.",
      icon: "bi-chat-square-dots-fill",
      color: "text-primary",
      bg: "bg-primary",
    },
    {
      id: 2,
      title: "Document Summarizer",
      desc: "Turn long reports into short, easy-to-read summaries in seconds.",
      icon: "bi-magic",
      color: "text-purple",
      bg: "bg-purple",
    },
    {
      id: 3,
      title: "AI Translator",
      desc: "Translate your documents into 50+ languages with high contextual accuracy.",
      icon: "bi-translate",
      color: "text-success",
      bg: "bg-success",
    },
    {
      id: 4,
      title: "Grammar Checker",
      desc: "Automatically fix typos, correct grammar, and improve the tone of your text.",
      icon: "bi-spellcheck",
      color: "text-danger",
      bg: "bg-danger",
    },
    {
      id: 5,
      title: "Smart OCR",
      desc: "Extract editable text from scanned documents and images using advanced AI.",
      icon: "bi-upc-scan",
      color: "text-info",
      bg: "bg-info",
    },
    {
      id: 6,
      title: "Data Extractor",
      desc: "Automatically pull names, dates, and numbers from invoices and forms.",
      icon: "bi-file-earmark-bar-graph-fill",
      color: "text-warning",
      bg: "bg-warning",
    },
  ];

  return (
    <div className="container mt-5 pt-4 pb-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <span
          className="badge bg-opacity-10 border rounded-pill px-3 py-2 mb-3 fw-semibold"
          style={{
            backgroundColor: "#f3e8ff",
            color: "#8a2be2",
            borderColor: "#8a2be2",
          }}
        >
          <i className="bi bi-stars me-1"></i> Powered by FileHub AI
        </span>
        <h1 className="fw-bolder text-dark display-5">Work Smarter with AI</h1>
        <p className="text-muted fs-5 mt-2">
          Automate your document workflows with our advanced artificial
          intelligence tools.
        </p>
      </div>

      {/* AI Tools Grid */}
      <div className="row g-4">
        {aiTools.map((tool) => (
          <div className="col-lg-4 col-md-6" key={tool.id}>
            <div
              className="card h-100 border-0 shadow-sm rounded-4 p-4"
              style={{ transition: "transform 0.2s", cursor: "pointer" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <div
                className={`d-inline-flex align-items-center justify-content-center rounded-3 mb-4 ${tool.bg} bg-opacity-10`}
                style={{ width: "60px", height: "60px" }}
              >
                <i
                  className={`bi ${tool.icon} fs-3 ${tool.color === "text-purple" ? "" : tool.color}`}
                  style={
                    tool.color === "text-purple" ? { color: "#8a2be2" } : {}
                  }
                ></i>
              </div>

              <h5 className="fw-bold text-dark">{tool.title}</h5>
              <p className="text-muted small mb-4 flex-grow-1">{tool.desc}</p>

              <div>
                <Link
                  to={`/tool/ai-${tool.title.toLowerCase().replace(/ /g, "-")}`}
                  className="text-decoration-none fw-semibold d-flex align-items-center"
                  style={
                    tool.color === "text-purple" ? { color: "#8a2be2" } : {}
                  }
                >
                  <span
                    className={tool.color === "text-purple" ? "" : tool.color}
                  >
                    Try Now
                  </span>
                  <i
                    className={`bi bi-arrow-right ms-2 ${tool.color === "text-purple" ? "" : tool.color}`}
                  ></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* AI Assistant Prompt Box */}
      <div className="mt-5 bg-dark rounded-4 p-5 text-center text-white shadow-lg position-relative overflow-hidden">
        {/* Background Gradient Effect */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(45deg, rgba(138,43,226,0.3) 0%, rgba(13,110,253,0.3) 100%)",
          }}
        ></div>

        <div className="position-relative" style={{ zIndex: 1 }}>
          <i className="bi bi-robot fs-1 mb-3 text-light"></i>
          <h3 className="fw-bold mb-3">Not sure which tool to use?</h3>
          <p
            className="text-light opacity-75 mb-4 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            Just type what you want to do, and our AI assistant will guide you
            to the right tool or do it for you.
          </p>

          <div
            className="input-group mx-auto shadow"
            style={{ maxWidth: "600px" }}
          >
            <input
              type="text"
              className="form-control form-control-lg border-0 px-4 py-3"
              style={{
                borderTopLeftRadius: "50px",
                borderBottomLeftRadius: "50px",
              }}
              placeholder="E.g., 'Summarize my 20-page report'"
            />
            <button
              className="btn btn-primary px-4 fw-bold"
              type="button"
              style={{
                borderTopRightRadius: "50px",
                borderBottomRightRadius: "50px",
              }}
            >
              Ask AI <i className="bi bi-send-fill ms-1"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AITools;
