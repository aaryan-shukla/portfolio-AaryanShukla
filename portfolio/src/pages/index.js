import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Footer from "../components/Footer";

export default function MainPage() {
  return (
    <div>
      <Navbar />
      <Home imageUrl={"./p1-removebg.png"} />
      <Skills />
      <Experience />
      <Education />
      Main Page
      <Footer />
    </div>
  );
}
