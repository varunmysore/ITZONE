import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Programs from "./components/programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

const App = () => {
  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title sub="Our Program" main="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title sub="Gallery" main="Products We Offer" />
        <Campus />
        <Title sub="Testimonials" main="What Our Customer Says" />
        <Testimonials />
        <Title sub="Contact Us" main="Get In Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
