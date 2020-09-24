import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import Landing from './Landing';
import MainForm from './forms/MainForm';
import MissingCountry from './forms/MissingCountry';
import Info from './Info';
import ParticleComponent from './ParticleComponent';
import { LOCATION } from './constants';

const INITIAL_STATE = {
  assessment : {
    userType: undefined,
    isPersonalInfo: false,
    infoType: undefined,
    answers: {
      organization: undefined,
      dataProcessed: undefined,
      dataUsers: undefined,
      dataDonors: undefined,
    },
    processor: undefined,
    province: undefined
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

  resetAssessment = () => {
    console.log('resetting');
    this.setState({ ...INITIAL_STATE });
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

  handlePersonalInfoChange  = (isPersonalInfo) => {
    this.setState(prevState => ({
      ...prevState,
      assessment: {
         ...prevState.assessment,
         isPersonalInfo: isPersonalInfo
      }
    }));
  }

  handleInfoTypeChange  = (infoType) => {
    this.setState(prevState => ({
      ...prevState,
      assessment: {
         ...prevState.assessment,
         infoType: infoType
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

  handleProcessorChange  = (processorType) => {
    this.setState(prevState => ({
      ...prevState,
      assessment: {
         ...prevState.assessment,
         processor: processorType
      }
    }));
  }

  handleProvinceChange  = (province) => {
    this.setState(prevState => ({
      ...prevState,
      assessment: {
         ...prevState.assessment,
         province: province
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
                    handlePersonalInfoChange={this.handlePersonalInfoChange}
                    handleInfoTypeChange={this.handleInfoTypeChange}
                    handleUserChange={this.handleUserChange}
                    handleProcessorChange={this.handleProcessorChange}
                    handleProvinceChange={this.handleProvinceChange}
                    handleAssessmentChange={this.onAssessmentChange}
                    resetAssessment={this.resetAssessment}
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
              <Route exact path='/missingCountry' component={MissingCountry} />
            </Switch>
          </div>
          <SiteFooter />
        </div>
      </>
    );
  }
}

export default App;
