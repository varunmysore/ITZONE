import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_img from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  const playVideo = () => {
    setPlayState(true);
  };
  return (
    <div className="about">
      <div className="column_left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_img} alt="" className="play-img" onClick={playVideo} />
      </div>
      <div className="column_right">
        <h3>About Service</h3>
        <h2>What We Offer, Services Given by Us</h2>
        <p>
          If youre looking for a partner that puts your needs first, then youve
          come to the right place. As your local technology provider, we
          guarantee to strive for excellence in every service that we offer. We
          work together to find the best solutions for your business, and we
          wont give up until youre satisfied. Thats the bleucare difference.
          Experience it for yourself by giving us a call.
        </p>
        <p>
          If youre looking for a partner that puts your needs first, then youve
          come to the right place. As your local technology provider, we
          guarantee to strive for excellence in every service that we offer. We
          work together to find the best solutions for your business, and we
          wont give up until youre satisfied. Thats the bleucare difference.
          Experience it for yourself by giving us a call.
        </p>
      </div>
    </div>
  );
};

export default About;
