import React, { forwardRef } from "react";
const Banner = forwardRef((props, ref) => {
  return (
    <>
      <section ref={ref} className="projects-section">
        <div className="container">
          <h2 className="new-projects">New projects coming soon.. 🤠</h2>
        </div>
      </section>
    </>
  );
});

export default Banner;
