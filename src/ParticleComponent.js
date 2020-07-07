import React from "react";
import Particles from "react-particles-js";

export default () => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: 'rgb(10, 91, 117)',
      backgroundSize: "cover",
      overflow: 'auto'
    }}
  >
  <Particles
      height={window.outerHeight}
      params={{
        "particles": {
            "number": {
                "value": 200
            },
            "size": {
                "value": 5
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
            }
        }
    }} />
  </div>
);
