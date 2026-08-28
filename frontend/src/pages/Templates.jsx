import { useState } from "react";

function Templates() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [previewTemplate, setPreviewTemplate] = useState(null);

  const categories = ["All", "Business", "Personal", "HR & Admin", "Legal"];

  const templatesList = [
    {
      id: 1,
      title: "Standard Invoice",
      category: "Business",
      icon: "bi-receipt",
      color: "text-primary",
    },
    {
      id: 2,
      title: "Professional Resume",
      category: "Personal",
      icon: "bi-person-lines-fill",
      color: "text-success",
    },
    {
      id: 3,
      title: "Offer Letter",
      category: "HR & Admin",
      icon: "bi-envelope-paper",
      color: "text-warning",
    },
    {
      id: 4,
      title: "NDA Agreement",
      category: "Legal",
      icon: "bi-file-earmark-lock",
      color: "text-danger",
    },
    {
      id: 5,
      title: "Meeting Agenda",
      category: "Business",
      icon: "bi-list-task",
      color: "text-info",
    },
    {
      id: 6,
      title: "Expense Report",
      category: "Business",
      icon: "bi-calculator",
      color: "text-secondary",
    },
    {
      id: 7,
      title: "Cover Letter",
      category: "Personal",
      icon: "bi-file-text",
      color: "text-primary",
    },
    {
      id: 8,
      title: "Employee Onboarding",
      category: "HR & Admin",
      icon: "bi-people",
      color: "text-success",
    },
  ];

  const filteredTemplates =
    activeCategory === "All"
      ? templatesList
      : templatesList.filter((t) => t.category === activeCategory);

  return (
    <div className="container mt-5 pt-4 pb-5">
      <div className="text-center mb-5">
        <h1 className="fw-bolder text-dark">Template Gallery</h1>
        <p className="text-muted">
          Start your work faster with our professionally designed templates.
        </p>
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`btn rounded-pill px-4 py-2 fw-semibold ${activeCategory === category ? "btn-primary shadow" : "btn-light border text-muted"}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="row g-4">
        {filteredTemplates.map((template) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={template.id}>
            <div
              className="card h-100 border-0 shadow-sm rounded-4 p-3"
              style={{ transition: "transform 0.2s" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <div
                className="bg-secondary bg-opacity-10 rounded-3 mb-3 d-flex align-items-center justify-content-center overflow-hidden"
                style={{ height: "180px" }}
              >
                <div
                  className="bg-white shadow-sm border d-flex flex-column p-2"
                  style={{
                    width: "110px",
                    height: "140px",
                    borderRadius: "4px",
                  }}
                >
                  <div
                    className="rounded mb-2"
                    style={{
                      height: "6px",
                      width: "50%",
                      backgroundColor: "#e2e8f0",
                    }}
                  ></div>
                  <div className="text-center my-auto">
                    <i
                      className={`bi ${template.icon} ${template.color}`}
                      style={{ fontSize: "2.5rem", opacity: "0.8" }}
                    ></i>
                  </div>
                  <div
                    className="rounded mb-1"
                    style={{
                      height: "4px",
                      width: "100%",
                      backgroundColor: "#f1f5f9",
                    }}
                  ></div>
                  <div
                    className="rounded"
                    style={{
                      height: "4px",
                      width: "70%",
                      backgroundColor: "#f1f5f9",
                    }}
                  ></div>
                </div>
              </div>

              <div className="card-body p-0">
                <span className="badge bg-light text-secondary border mb-2">
                  {template.category}
                </span>
                <h6 className="fw-bold mb-3">{template.title}</h6>

                <div className="d-flex gap-2">
                  <button
                    onClick={() => setPreviewTemplate(template)}
                    className="btn btn-outline-secondary btn-sm flex-fill rounded-pill fw-semibold"
                  >
                    <i className="bi bi-eye me-1"></i> Preview
                  </button>
                  <button className="btn btn-primary btn-sm flex-fill rounded-pill fw-semibold">
                    Use
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- PREVIEW MODAL POPUP --- */}
      {previewTemplate && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          tabIndex="-1"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content rounded-4 border-0 shadow-lg">
              <div className="modal-header border-bottom-0 pb-0 pt-4 px-4">
                <h4 className="modal-title fw-bold text-dark">
                  {previewTemplate.title} Preview
                </h4>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setPreviewTemplate(null)}
                ></button>
              </div>
              <div className="modal-body p-4 text-center">
                <div
                  className="bg-light border rounded-4 d-flex align-items-center justify-content-center mx-auto shadow-sm"
                  style={{ height: "400px", maxWidth: "350px" }}
                >
                  <div className="text-center">
                    <i
                      className={`bi ${previewTemplate.icon} ${previewTemplate.color} mb-3`}
                      style={{ fontSize: "5rem", opacity: "0.9" }}
                    ></i>
                    <h5 className="fw-bold text-secondary">Document Preview</h5>
                    <p className="text-muted small px-4">
                      This is how your {previewTemplate.title.toLowerCase()}{" "}
                      will look before you start editing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-top-0 pt-0 pb-4 justify-content-center">
                <button
                  className="btn btn-primary rounded-pill px-5 py-3 fw-bold fs-6"
                  onClick={() => setPreviewTemplate(null)}
                >
                  Use This Template Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Templates;
