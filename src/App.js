import React, {Component} from 'react';

import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import Landing from "./Landing";

class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
              <div>
                <SiteHeader />
                <Landing />
              </div>
          );
    }
}

export default App;
