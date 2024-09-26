import React, { forwardRef } from "react";
const Banner = forwardRef((props, ref) => {
  return (
    <>
      <section ref={ref} className="contact-section">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <h3>Get in touch 👇</h3>
          <div className="contact-container">
            <div className="contact-location">
              <span className="contact-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                  <path d="M9 4v13"></path>
                  <path d="M15 7v5"></path>
                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M20.2 20.2l1.8 1.8"></path>
                </svg>
              </span>
              <div className="contact-info">
                <h4>Location</h4>
                <p>Craiova, Romania</p>
              </div>
            </div>
            <div className="contact-email">
              <span className="contact-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                  <path d="M3 7l9 6l9 -6"></path>
                </svg>
              </span>
              <div className="contact-info">
                <h4>Mail</h4>
                <a href="mailto:cristi.mendea@gmail.com">
                  cristi.mendea@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default Banner;
