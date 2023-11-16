import React from "react";

function Projectcard(props) {
  return (
    <div className="card">
      <div className="imgdiv"></div>
      <h2>{props.name}</h2>
      <div className="buttons">
      <button>Git hub</button>
      <button>Live Demo</button>
      </div>
    </div>
  );
}

export default Projectcard;
