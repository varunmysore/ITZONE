import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>
          The question isn't who is going to let me; it's who is going to stop
          me...!
        </h1>
        <p>
          Be courageous. Challenge orthodoxy. Stand up for what you believe in.
          When you are in your rocking chair talking to your grandchildren many
          years from now, be sure you have a good story to tell.
        </p>
        <button className="btn">
          Explore More <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
