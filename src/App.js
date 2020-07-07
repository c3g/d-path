import React, {Component} from 'react';

import {withRouter, Redirect, Route, Switch} from "react-router-dom";

import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import Landing from "./Landing";
import MainForm from "./forms/MainForm";
import ParticleComponent from "./ParticleComponent";

class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
              <>
                  <ParticleComponent />
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundSize: "cover",
                      overflow:'overlay'
                    }}
                  >
                    <SiteHeader />
                    <Switch>
                      <Route exact path={("/")} component={Landing} />
                      <Route path={("/start")} component={MainForm} />
                    </Switch>
                    <SiteFooter />
                  </div>
              </>
          );
    }
}

export default App;
