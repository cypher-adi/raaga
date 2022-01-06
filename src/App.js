import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeNavbar from "./components/HomeNavbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Learn from "./components/Learn";

function App() {
  return (
    <>
      <HomeNavbar />
      <div className="container text-white">
        <div className="ml-4 mt-3">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about/" element={<About />} />
              <Route path="/contact/" element={<Contact />} />
              <Route path="/learn/" element={<Learn />} />
            </Routes>
          </Router>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
