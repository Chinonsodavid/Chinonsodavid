import React from "react";

function Experience() {
  return (
    <div id="experience">
      <small className="small">Explore My</small>
      <h1 className="h1">Experience</h1>
      <div className="parents">
        <div className="child_1">
          <h3>Frontend Development</h3>
          <h4>
            {" "}
            <span>
              <i class="fa fa-check-circle" aria-hidden="true"></i>
            </span>
            HTML
            <span>
              <progress value={"100"} max={"100"}></progress>
            </span>
          </h4>
          <h4>
            <span>
              <i class="fa fa-check-circle" aria-hidden="true"></i>
            </span>
            CSS
            <span>
              <progress value={"100"} max={"100"}></progress>
            </span>
          </h4>
          <h4>
            Javascript
            <span>
              <progress value={"70"} max={"100"}></progress>
            </span>
          </h4>
          <h4>
            Bootsrap
            <span>
              <progress value={"50"} max={"100"}></progress>
            </span>
          </h4>
          <h4>
            React
            <span>
              <progress value={"60"} max={"100"}></progress>
            </span>
          </h4>
        </div>
        <div className="child_1">
          <h3>Backend Development</h3>
          <h4>
            JAVA
            <span>
              {" "}
              <progress value={"50"} max={"100"}></progress>
            </span>
          </h4>
          <h4>
            Node.js
            <span>
              <progress value={"30"} max={"100"}></progress>
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Experience;
