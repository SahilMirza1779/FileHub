import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";
import heroImage from "../assets/hero-image.png";

function Home() {
  const { language } = useContext(LanguageContext);

  const translations = {
    EN: {
      badge: "All-in-One File & Document Solution",
      title1: "Everything You Need to Work with Files. ",
      title2: "Smarter.",
      desc: "Edit, convert, organize, secure, and automate your documents with powerful tools trusted by millions of users worldwide.",
      btn1: "Get Started Free",
      btn2: "Explore Tools",
    },
    HI: {
      badge: "ऑल-इन-वन फ़ाइल और दस्तावेज़ समाधान",
      title1: "फ़ाइलों के साथ काम करने के लिए ज़रूरी सब कुछ। ",
      title2: "स्मार्ट तरीके से।",
      desc: "दुनिया भर के लाखों उपयोगकर्ताओं द्वारा भरोसेमंद शक्तिशाली टूल के साथ अपने दस्तावेज़ों को संपादित, कनवर्ट, व्यवस्थित, सुरक्षित और स्वचालित करें।",
      btn1: "मुफ़्त में शुरू करें",
      btn2: "टूल्स देखें",
    },
    GU: {
      badge: "ઓલ-ઇન-વન ફાઇલ અને ડોક્યુમેન્ટ સોલ્યુશન",
      title1: "ફાઇલો સાથે કામ કરવા માટે જરૂરી બધું. ",
      title2: "સ્માર્ટ રીતે.",
      desc: "દુનિયાભરના લાખો વપરાશકર્તાઓ દ્વારા વિશ્વસનીય શક્તિશાળી ટૂલ્સ વડે તમારા દસ્તાવેજોને એડિટ, કન્વર્ટ, ગોઠવો, સુરક્ષિત અને સ્વચાલિત કરો.",
      btn1: "મફતમાં શરૂ કરો",
      btn2: "ટૂલ્સ જુઓ",
    },
    MR: {
      badge: "ऑल-इन-वन फाईल आणि डॉक्युमेंट सोल्यूशन",
      title1: "फाईल्ससोबत काम करण्यासाठी आवश्यक सर्वकाही. ",
      title2: "स्मार्ट पद्धतीने.",
      desc: "जगभरातील लाखो वापरकर्त्यांचा विश्वास असलेल्या शक्तिशाली टूल्ससह तुमचे दस्तऐवज संपादित करा, रूपांतरित करा, व्यवस्थापित करा, सुरक्षित करा आणि स्वयंचलित करा.",
      btn1: "मोफत सुरू करा",
      btn2: "टूल्स पहा",
    },
    UR: {
      badge: "آل ان ون فائل اور دستاویز کا حل",
      title1: "فائلوں کے ساتھ کام کرنے کے لیے آپ کی ہر ضرورت۔ ",
      title2: "زیادہ سمارٹ۔",
      desc: "دنیا بھر کے لاکھوں صارفین کے زیر استعمال طاقتور ٹولز کے ساتھ اپنی دستاویزات میں ترمیم کریں، تبدیل کریں، منظم کریں، محفوظ کریں اور خودکار بنائیں۔",
      btn1: "مفت شروع کریں",
      btn2: "ٹولز دیکھیں",
    },
    AR: {
      badge: "حل شامل للملفات والمستندات",
      title1: "كل ما تحتاجه للعمل مع الملفات. ",
      title2: "بذكاء أكبر.",
      desc: "قم بتحرير مستنداتك وتحويلها وتنظيمها وتأمينها وأتمتتها باستخدام أدوات قوية يثق بها ملايين المستخدمين حول العالم.",
      btn1: "ابدأ مجانًا",
      btn2: "استكشف الأدوات",
    },
    ES: {
      badge: "Solución de archivos y documentos todo en uno",
      title1: "Todo lo que necesitas para trabajar con archivos. ",
      title2: "Más inteligente.",
      desc: "Edite, convierta, organice, proteja y automatice sus documentos con potentes herramientas en las que confían millones de usuarios en todo el mundo.",
      btn1: "Empieza Gratis",
      btn2: "Explorar Herramientas",
    },
    FR: {
      badge: "Solution tout-en-un pour fichiers et documents",
      title1:
        "Tout ce dont vous avez besoin pour travailler avec des fichiers. ",
      title2: "Plus intelligemment.",
      desc: "Modifiez, convertissez, organisez, sécurisez et automatisez vos documents avec des outils puissants approuvés par des millions d'utilisateurs dans le monde.",
      btn1: "Commencez Gratuitement",
      btn2: "Explorer les Outils",
    },
  };

  const t = translations[language] || translations.EN;

  return (
    <div className="container mt-5 pt-4">
      {/* 1. HERO SECTION */}
      <div className="row align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <span className="badge bg-light text-primary border rounded-pill px-3 py-2 mb-3 fw-semibold">
            {t.badge}
          </span>
          <h1
            className="display-4 fw-bolder text-dark mb-4"
            style={{ lineHeight: "1.2" }}
          >
            {t.title1}
            <span className="text-primary">{t.title2}</span>
          </h1>
          <p className="text-secondary mb-4" style={{ fontSize: "18px" }}>
            {t.desc}
          </p>

          <div className="d-flex flex-wrap gap-3 mb-4">
            <Link
              to="/signup"
              className="btn btn-primary rounded-pill px-4 py-3 fw-bold shadow-sm d-flex align-items-center"
            >
              {t.btn1} <i className="bi bi-arrow-right ms-2"></i>
            </Link>
            <Link
              to="/pdf-tools"
              className="btn btn-light rounded-pill px-4 py-3 fw-bold border d-flex align-items-center"
            >
              <i className="bi bi-grid-3x3-gap me-2"></i> {t.btn2}
            </Link>
          </div>

          <div
            className="d-flex flex-wrap gap-3 text-muted"
            style={{ fontSize: "14px" }}
          >
            <span className="d-flex align-items-center">
              <i className="bi bi-check-circle-fill text-primary me-2"></i> No
              credit card required
            </span>
            <span className="d-flex align-items-center">
              <i className="bi bi-check-circle-fill text-primary me-2"></i> Free
              forever plan
            </span>
            <span className="d-flex align-items-center">
              <i className="bi bi-check-circle-fill text-primary me-2"></i>{" "}
              Secure & Private
            </span>
          </div>
        </div>

        <div className="col-lg-6 text-center">
          <img
            src={heroImage}
            alt="FileHub Dashboard"
            className="img-fluid"
            style={{
              maxWidth: "90%",
              animation: "floating 3s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* 2. 4 FEATURE CARDS SECTION */}
      <div className="row mt-5 pt-4">
        <div className="col-12">
          <div
            className="card border-0 shadow-sm rounded-4 p-4"
            style={{ backgroundColor: "#f8f9fa" }}
          >
            <div className="row g-4 text-center text-md-start">
              <div className="col-md-3 border-end-md">
                <div className="d-flex flex-column align-items-center align-items-md-start px-2">
                  <div className="bg-danger bg-opacity-10 text-danger p-3 rounded-3 mb-3">
                    <i className="bi bi-file-earmark-pdf-fill fs-5"></i>
                  </div>
                  <h6 className="fw-bold">PDF Tools</h6>
                  <p className="text-muted small mb-2">
                    Convert, merge, split, compress & more
                  </p>
                  <Link
                    to="/pdf-tools"
                    className="text-decoration-none fw-semibold small text-primary"
                  >
                    Explore &rarr;
                  </Link>
                </div>
              </div>

              <div className="col-md-3 border-end-md">
                <div className="d-flex flex-column align-items-center align-items-md-start px-2">
                  <div
                    className="bg-purple p-3 rounded-3 mb-3"
                    style={{ backgroundColor: "#f3e8ff", color: "#8a2be2" }}
                  >
                    <i className="bi bi-magic fs-5"></i>
                  </div>
                  <h6 className="fw-bold">AI Tools</h6>
                  <p className="text-muted small mb-2">
                    Summarize, analyze, translate & chat
                  </p>
                  <Link
                    to="/ai-tools"
                    className="text-decoration-none fw-semibold small text-primary"
                  >
                    Explore &rarr;
                  </Link>
                </div>
              </div>

              <div className="col-md-3 border-end-md">
                <div className="d-flex flex-column align-items-center align-items-md-start px-2">
                  <div className="bg-info bg-opacity-10 text-info p-3 rounded-3 mb-3">
                    <i className="bi bi-ui-checks fs-5"></i>
                  </div>
                  <h6 className="fw-bold">Form Builder</h6>
                  <p className="text-muted small mb-2">
                    Create smart forms in minutes
                  </p>
                  <Link
                    to="/form-builder"
                    className="text-decoration-none fw-semibold small text-primary"
                  >
                    Explore &rarr;
                  </Link>
                </div>
              </div>

              <div className="col-md-3">
                <div className="d-flex flex-column align-items-center align-items-md-start px-2">
                  <div className="bg-warning bg-opacity-10 text-warning p-3 rounded-3 mb-3">
                    <i className="bi bi-layout-text-window-reverse fs-5"></i>
                  </div>
                  <h6 className="fw-bold">Templates</h6>
                  <p className="text-muted small mb-2">
                    Professional templates for every need
                  </p>
                  <Link
                    to="/templates"
                    className="text-decoration-none fw-semibold small text-primary"
                  >
                    Explore &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. STATS SECTION */}
      <div className="row mt-5 pt-4 pb-5 text-center">
        <div className="col-md-3 col-6 mb-4 d-flex justify-content-center align-items-center gap-2">
          <i className="bi bi-people-fill text-primary fs-3"></i>
          <div className="text-start">
            <h4 className="fw-bolder mb-0">10M+</h4>
            <p className="text-muted small mb-0">Happy Users</p>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-4 d-flex justify-content-center align-items-center gap-2">
          <i className="bi bi-file-earmark-text-fill text-info fs-3"></i>
          <div className="text-start">
            <h4 className="fw-bolder mb-0">50M+</h4>
            <p className="text-muted small mb-0">Files Processed</p>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-4 d-flex justify-content-center align-items-center gap-2">
          <i className="bi bi-shield-check text-success fs-3"></i>
          <div className="text-start">
            <h4 className="fw-bolder mb-0">100%</h4>
            <p className="text-muted small mb-0">Secure & Private</p>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-4 d-flex justify-content-center align-items-center gap-2">
          <i className="bi bi-globe text-secondary fs-3"></i>
          <div className="text-start">
            <h4 className="fw-bolder mb-0">200+</h4>
            <p className="text-muted small mb-0">Countries</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
