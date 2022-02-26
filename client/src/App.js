import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import About from "./components/About";
import Admin from "./components/Admin";
import Audio from "./components/Audio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import GalleryEntry from "./components/GalleryEntry";
import Home from "./components/Home";



function App() {
  
  return (
    <div>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/gallery-entry" element={<GalleryEntry />} />
          <Route path="/about" element={<About />} />
          <Route path="/audio" element={<Audio />} />
          <Route
            path="/history-gallery"
            element={<Gallery section="history" />}
          />
          <Route
            path="/restoration-gallery"
            element={<Gallery section="restoration" />}
          />
          <Route path="/event-gallery" element={<Gallery section="event" />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
        <a className="attribution" href="https://www.freeiconspng.com/img/14392">School House Icon Pictures</a>
      </div>
    </div>
  );
}

export default App;
