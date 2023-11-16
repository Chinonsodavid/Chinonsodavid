import React from "react";

function Landing() {
  return (
    <div className="landing">
      <img src="/img2.JPG" alt="" />
      <div className="text">
        <h5>Hello,i'm</h5>
        <h2>Lateef Busari</h2>
        <h3>Frontend Developer</h3>
        <div className="buttons">
          <button>Download CV</button>
          <button className="but">Contact Me</button>
        </div>
        <div className="icon">
          <i class="fa fa-linkedin" aria-hidden="true"></i>
          <i class="fa fa-github" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
}

export default Landing;
