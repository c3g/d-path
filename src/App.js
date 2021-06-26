import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import Landing from './Landing';
import AboutUs from './AboutUs';
import Terminology from './Terminology';
import PrivacyPolicy from './PrivacyPolicy';
import License from './License';
import Disclaimer from './Disclaimer';
import DataDonorsForm from './forms/DataDonorsForm';
import DataProcessingForm from './forms/DataProcessingForm';
import DataUsersForm from './forms/DataUsersForm';
import OrganizationForm from './forms/OrganizationForm';
import ServicesForm from './forms/ServicesForm';
import UserInfo from './forms/UserInfo';
import Success from './forms/Success';
import OtherUser from './forms/OtherUser';
import InfoDescription from './forms/InfoDescription';
import InfoPublic from './forms/InfoPublic';
import InfoIdentifiable from './forms/InfoIdentifiable';
import InfoProcessor from './forms/InfoProcessor';
import InfoProvince from './forms/InfoProvince';
import InfoCrossesBorders from './forms/InfoCrossesBorders';
import InfoHealth from './forms/InfoHealth';
import AdditionalCountry from './forms/AdditionalCountry';
import Info from './Info';
import ParticleComponent from './ParticleComponent';
import { resetSteps } from './utils/Steps.js'
import { LOCATION } from './constants';

const INITIAL_STATE = {
  assessment : {
    userType: undefined,
    isPersonalInfo: undefined,
    infoType: undefined,
    isPublic: undefined,
    isIdentifiable: undefined,
    areServicesOffered: undefined,
    answers: {
      organization: undefined,
      dataDonors: undefined
    },
    processor: undefined,
    province: undefined,
    isHealthInformation: undefined,
    crossesBorders: undefined,
    GDPRWarning: undefined,
  },
  step: 0,
}

function getLocations(answers) {
  return Object.values(answers)
    .filter(Boolean)
    .filter(l => l !== LOCATION.NON_EU)
    .filter(l => l !== 'No');
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;

    this.onAssessmentChange = this.onAssessmentChange.bind(this)
  }

  resetAssessment = () => {
    resetSteps();
    this.setState({ ...INITIAL_STATE });
  }

  nextStep = () => {
    this.setState({ step: this.state.step + 1 });
  }

  prevStep = () => {
    this.setState({ step: this.state.step - 1 });
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

  handlePublicInfoChange  = (isPublic) => {
    this.setState(prevState => ({
      ...prevState,
      assessment: {
         ...prevState.assessment,
         isPublic: isPublic
      }
    }));
  }

  handleIdentifiableInfoChange  = (isIdentifiable) => {
    this.setState(prevState => ({
      ...prevState,
      assessment: {
         ...prevState.assessment,
         isIdentifiable: isIdentifiable
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

  handleHealthInfoChange  = (isHealthInfo) => {
    this.setState(prevState => ({
      ...prevState,
      assessment: {
         ...prevState.assessment,
         isHealthInfo: isHealthInfo
      }
    }));
  }

  handleCrossesBordersChange  = (crossesBorders) => {
    this.setState(prevState => ({
      ...prevState,
      assessment: {
         ...prevState.assessment,
         crossesBorders: crossesBorders
      }
    }));
  }

  handleServicesOfferedChange  = (areServicesOffered) => {
    this.setState(prevState => ({
      ...prevState,
      assessment: {
         ...prevState.assessment,
         areServicesOffered: areServicesOffered
      }
    }));
  }

  handleGDPRWarning  = (hasGDPRWarning) => {
    this.setState(prevState => ({
      ...prevState,
      assessment: {
         ...prevState.assessment,
         GDPRWarning: hasGDPRWarning
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
    const { assessment, step } = this.state;
    const assessmentProps = {
        assessment:assessment,
        step: step,
        nextStep: this.nextStep,
        prevStep: this.prevStep,
        onAssessmentChange:this.onAssessmentChange,
        handleLocChange:this.handleLocChange,
        handlePersonalInfoChange:this.handlePersonalInfoChange,
        handleInfoTypeChange:this.handleInfoTypeChange,
        handleIdentifiableInfoChange: this.handleIdentifiableInfoChange,
        handlePublicInfoChange:this.handlePublicInfoChange,
        handleUserChange:this.handleUserChange,
        handleProcessorChange:this.handleProcessorChange,
        handleProvinceChange:this.handleProvinceChange,
        handleAssessmentChange:this.onAssessmentChange,
        handleHealthInfoChange:this.handleHealthInfoChange,
        handleCrossesBordersChange:this.handleCrossesBordersChange,
        handleServicesOfferedChange:this.handleServicesOfferedChange,
        handleGDPRWarning:this.handleGDPRWarning,
        resetAssessment:this.resetAssessment,
        locations:getLocations(assessment.answers)
    }
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
              <Route exact path='/about-us' component={AboutUs} />
              <Route exact path='/terminology' component={Terminology} />
              <Route exact path='/privacy-policy' component={PrivacyPolicy} />
              <Route exact path='/license' component={License} />
              <Route exact path='/disclaimer' component={Disclaimer} />
              <Route
                path='/assessment/user'
                render={(props) => (
                  <UserInfo {...props}
                    {...assessmentProps}
                   />
                )}
              />
              <Route
                path='/assessment/other-user'
                render={(props) => (
                  <OtherUser {...props}
                    {...assessmentProps}
                   />
                )}
              />
              <Route
                path='/assessment/organization'
                render={(props) => (
                  <OrganizationForm {...props}
                    {...assessmentProps}
                   />
                )}
              />
              <Route
                path='/assessment/processor'
                render={(props) => (
                  <DataProcessingForm {...props}
                    {...assessmentProps}
                   />
                )}
              />
              <Route
                path='/assessment/recipients'
                render={(props) => (
                  <DataUsersForm {...props}
                    {...assessmentProps}
                   />
                )}
              />
              <Route
                path='/assessment/donors'
                render={(props) => (
                  <DataDonorsForm {...props}
                    {...assessmentProps}
                   />
                )}
              />
              <Route
                path='/assessment/services'
                render={(props) => (
                  <ServicesForm {...props}
                    {...assessmentProps}
                   />
                )}
              />
              <Route
                path='/assessment/info/description'
                render={(props) => (
                  <InfoDescription {...props}
                    {...assessmentProps}
                   />
                )}
              />
              <Route
                path='/assessment/info/identifiable'
                render={(props) => (
                  <InfoIdentifiable {...props}
                    {...assessmentProps}
                   />
                )}
              />
              <Route
                path='/assessment/info/public'
                render={(props) => (
                  <InfoPublic {...props}
                    {...assessmentProps}
                   />
                )}
              />
              <Route
                path='/assessment/info/processor'
                render={(props) => (
                  <InfoProcessor {...props}
                    {...assessmentProps}
                   />
                )}
              />
              <Route
                path='/assessment/info/province'
                render={(props) => (
                  <InfoProvince {...props}
                    {...assessmentProps}
                   />
                )}
              />
              <Route
                path='/assessment/info/border'
                render={(props) => (
                  <InfoCrossesBorders {...props}
                    {...assessmentProps}
                   />
                )}
              />
              <Route
                path='/assessment/info/health'
                render={(props) => (
                  <InfoHealth {...props}
                    {...assessmentProps}
                   />
                )}
              />
              <Route
                path='/assessment/success'
                render={(props) => (
                  <Success {...props}
                    {...assessmentProps}
                   />
                )}
              />
              <Route
                path='/obligations'
                render={(props) => (
                  <Info {...props}
                    locations={getLocations(assessment.answers)}
                    assessment={assessment}
                    resetAssessment={this.resetAssessment}
                  />
                )}
              />
              <Route exact path='/additional-country' component={AdditionalCountry} />
            </Switch>
          </div>
          <SiteFooter />
        </div>
      </>
    );
  }
}

export default App;
