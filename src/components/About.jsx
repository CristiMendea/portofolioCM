import React, { forwardRef } from "react";
const Banner = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="about-section">
      <div className="container">
        <div className="about-container">
          <div className="about-container-image">
            <img src="/public/about-me.jpg" alt="Cristian Mendea" />
          </div>
          <div className="about-container-content">
            <h2 className="section-title">About me</h2>
            <h3>Front-end Developer based in Craiova, Romania 📍</h3>
            <p>
              Hey, my name is Cristian, and I'm a Frontend Developer. My passion
              is to create and develop a clean UI/UX for my users.
            </p>
            <p>
              My main stack currently is React.js in combination with Tailwind
              CSS and Javascript/TypeScript.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Banner;
