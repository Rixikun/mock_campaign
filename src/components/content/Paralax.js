import React from "react";
import { Parallax } from "react-parallax";

const nyc = require("../../assets/images/nyc_sky.jpg");
const egg = require("../../assets/images/egg.png");

const inlineStyle = {
  background: "#fff",
  left: "50%",
  top: "50%",
  position: "absolute",
  padding: "20px",
  transform: "translate(-50%, -50%",
};

const Paralax = () => {
  return (
    <div className="paralax" style={{ textAlign: "center" }}>
      <Parallax bgImage={nyc} strength={500}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>Inside the parallax</div>
        </div>
      </Parallax>
      <h1>| | |</h1>
      <Parallax bgImage={nyc} blur={{ min: -1, max: 5 }}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>Blur?</div>
        </div>
      </Parallax>
      <h1>| | |</h1>
      <Parallax bgImage={nyc} strength={-200}>
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>Reverse</div>
        </div>
      </Parallax>
      <h1>| | |</h1>
      <Parallax
        bgImage={nyc}
        strength={200}
        renderLayer={(percentage) => (
          <div
            style={{
              position: "absolute",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background: `rgba(255,123,23, ${percentage * 1}`,
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%) scale(${percentage * 5})`,
            }}
          >
            {console.log("%: ", percentage)}
          </div>
        )}
      >
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>Render Props</div>
        </div>
      </Parallax>
      <div style={{ height: "100vh" }}></div>
    </div>
  );
};

export default Paralax;
