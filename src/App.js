import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
import Form from "./components/Form";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronRight, faTimes);

function App() {
  const handleScrollHome = (elem) => {
    /*     console.log("hello", elem); */
    if (document.getElementById(`div-${elem}`)) {
      document
        .getElementById(`div-${elem}`)
        .scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <header>
        <Header handleScroll={handleScrollHome} />
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/case-studies" element={<CaseStudies />}></Route>
        <Route path="/contact" element={<Form />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
