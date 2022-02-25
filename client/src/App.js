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
import { db } from "./config/firebase";
import { doc, setDoc } from "firebase/firestore";

let dataSet = [
  {
    name: "Corner-School-Float-photo",
    blurb: "\nThe Corner School Float in the Warren 4th of July Parade",
    ext: ".jpg",
  },
  {
    name: "IMG_0590",
    blurb: "\nCupKate at the Corner School bake sale",
    ext: ".jpg",
  },
  {
    name: "IMG_0829",
    blurb:
      "\nThe Grancille selesct board selling the Corner School building to the Corner School Resource Center group",
    ext: ".jpg",
  },
  { name: "IMG_0830", blurb: "\n", ext: ".jpg" },
  { name: "IMG_0837", blurb: "\n", ext: ".jpg" },
  { name: "IMG_0810", blurb: "\nCarrie Turnbull", ext: ".jpg" },
  { name: "image1", blurb: "\nChris Millard", ext: ".jpeg" },
  { name: "image2", blurb: "\nMargaret & Bruce Hyde", ext: ".jpeg" },
  { name: "image3", blurb: "\nChris Millard & Diane Eramo", ext: ".jpeg" },
  { name: "image4", blurb: "\nBecky Burgee", ext: ".jpeg" },
  { name: "image5", blurb: "\nValerie Becker", ext: ".jpeg" },
  { name: "image6", blurb: "\nKate Stauss & ??", ext: ".jpeg" },
  { name: "image7", blurb: "\nThe Big Blue Truck", ext: ".jpeg" },
  { name: "image8", blurb: "\nSchool is open!", ext: ".jpeg" },
  {
    name: "image9",
    blurb: "\nReady for classes at the Corner School",
    ext: ".jpeg",
  },
  { name: "image10", blurb: "\nThe event signs", ext: ".jpeg" },
  {
    name: "image11",
    blurb:
      "\nInstalling the last piece of sub-flooring\n-carpenter Jon Lambert",
    ext: ".jpeg",
  },
];

let gallerySetup = dataSet.map((imgData) => {
  imgData.url = `https://firebasestorage.googleapis.com/v0/b/granville-corner-school.appspot.com/o/restoration%${imgData.name + imgData.ext}?alt=media&token=d71f346e-9690-42d4-b992-d7e3492a7c3f`

  return imgData
});


function App() {

  useEffect(() => {
    gallerySetup.forEach(async (entry) => {
      await setDoc(doc(db, "restoration"), entry);
    });
  }, [])
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
      </div>
    </div>
  );
}

export default App;
