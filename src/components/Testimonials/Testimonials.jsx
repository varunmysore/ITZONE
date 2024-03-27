import React, { useRef } from "react";
import "./Testimonials.css";
import left_arrow from "../../assets/back-icon.png";
import right_arrow from "../../assets/next-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonials">
      <img
        src={left_arrow}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <img
        src={right_arrow}
        alt=""
        className="next-btn"
        onClick={slideForward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Name 1</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium, voluptatum? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Facere, soluta.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Name 2</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium, voluptatum? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Facere, soluta.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Name 3</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium, voluptatum? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Facere, soluta.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Name 4</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium, voluptatum? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Facere, soluta.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
