import React, {Component} from 'react';

import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import Landing from "./Landing";
import ParticleComponent from "./ParticleComponent";

class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  'background-size': "cover",
                }}>
                  <ParticleComponent/>
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      'background-size': "cover",
                    }}
                  >
                    <SiteHeader />
                    <Landing />
                    <SiteFooter />
                  </div>
              </div>
          );
    }
}

export default App;
