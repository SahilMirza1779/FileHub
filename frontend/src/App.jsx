import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home"; // We have imported the home page here.

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* The Home component will now load here. */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
