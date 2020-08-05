import React, {Component} from 'react';
import {withRouter, Redirect, Route, Switch} from 'react-router-dom';

import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import Landing from './Landing';
import MainForm from './forms/MainForm';
import Info from './Info';
import ParticleComponent from './ParticleComponent';

class App extends Component {
    constructor(props) {
        super(props);

      this.state = {
        locations:[],
        isPersonalInfo: null,
      }

      this.onLocationChange = this.onLocationChange.bind(this)
    }

    onLocationChange = (locations, isPersonalInfo) => {
      this.setState({
        locations: locations,
        isPersonalInfo: isPersonalInfo
      })
    }

    render() {
        const { locations, isPersonalInfo } = this.state;
        return(
              <>
                  <ParticleComponent />
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundSize: "cover",
                      overflow: 'overlay'
                    }}
                  >
                    <SiteHeader />
                    <Switch>
                      <Route exact path='/' component={Landing} />
                      <Route
                        path='/start'
                        render={(props) => (
                          <MainForm {...props} onLocationChange={this.onLocationChange} />
                        )}
                      />
                      <Route
                        path='/info'
                        render={(props) => (
                          <Info {...props} locations={locations} isPersonalInfo={isPersonalInfo}/>
                        )}
                      />
                    </Switch>
                    <SiteFooter />
                  </div>
              </>
          );
    }
}

export default App;
