import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import Landing from './Landing';
import MainForm from './forms/MainForm';
import Info from './Info';
import ParticleComponent from './ParticleComponent';
import { LOCATION } from './constants';

const INITIAL_STATE = {
  assessment : {
    userType: undefined,
    isPersonalInfo: false,
    answers: {
      organization: undefined,
      dataProcessed: undefined,
      dataUsers: undefined,
      dataDonors: undefined,
    }
  }
}

function getLocations(answers) {
  return Object.values(answers)
    .filter(Boolean)
    .filter(l => l !== LOCATION.NON_EU);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;

    this.onAssessmentChange = this.onAssessmentChange.bind(this)
  }

  handleLocChange = (input) => {
    const answers  = {...this.state.assessment.answers}
    this.setState(prevState => ({
      ...prevState,
      assessment: {
         ...prevState.assessment,
         answers:  { ...answers, [input.type]: input.location },
      }
    }));
  }

  handleInfoChange  = (isPersonalInfo) => {
    console.log(isPersonalInfo);
    this.setState(prevState => ({
      ...prevState,
      assessment: {
         ...prevState.assessment,
         isPersonalInfo: isPersonalInfo
      }
    }));
  }

  handleUserChange  = (userType) => {
    this.setState(prevState => ({
      ...prevState,
      assessment: {
         ...prevState.assessment,
         userType: userType
      }
    }));
  }

  onAssessmentChange = (locations, isPersonalInfo) => {
    this.setState({
      locations: locations,
      isPersonalInfo: isPersonalInfo
    })
  }

  render() {
    const { assessment } = this.state;
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
            display: 'flex',
            flexDirection: 'column',
            backgroundSize: 'cover',
            overflow: 'overlay'
          }}
        >
          <SiteHeader />
          <div style={{ flex: '1' }}>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route
                path='/assessment'
                render={(props) => (
                  <MainForm {...props}
                    assessment={assessment}
                    onAssessmentChange={this.onAssessmentChange}
                    handleLocChange={this.handleLocChange}
                    handleInfoChange={this.handleInfoChange}
                    handleUserChange={this.handleUserChange}
                    handleAssessmentChange={this.onAssessmentChange}
                    locations={getLocations(assessment.answers)}
                   />
                )}
              />
              <Route
                path='/obligations'
                render={(props) => (
                  <Info {...props}
                    locations={getLocations(assessment.answers)}
                    assessment={assessment}
                  />
                )}
              />
            </Switch>
          </div>
          <SiteFooter />
        </div>
      </>
    );
  }
}

export default App;
