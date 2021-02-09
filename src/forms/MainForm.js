import React, { Component } from 'react';
import {Container, Jumbotron, Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import cx from 'classnames';
import Icon from 'react-fontawesome';

import OrganizationForm from './OrganizationForm';
import DataProcessingForm from './DataProcessingForm';
import DataUsersForm from './DataUsersForm';
import DataDonorsForm from './DataDonorsForm';
import Success from './Success';
import PersonalInfo from './PersonalInfo';
import UserInfo from './UserInfo';
import OtherUser from './OtherUser';
import { USER_TYPE } from '../constants';

const STEPS = [
  UserInfo,
  OrganizationForm,
  DataProcessingForm,
  DataUsersForm,
  DataDonorsForm,
  PersonalInfo,
  Success,
]

class MainForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      userType: undefined,
    };
  }

  nextStep = () => {
    this.setState({ step: this.state.step + 1 });
  }

  prevStep = () => {
    const {
      handleUserChange,
      assessment,
      handleProcessorChange,
      handleProvinceChange,
      handleInfoTypeChange
     } = this.props;
    console.log(assessment);
    if (this.state.step === 1)
      handleUserChange(undefined);
    if (this.state.step === 0)
      this.props.history.push('/')
    if(this.state.step === 6 && assessment.province && assessment.infoType){
      handleProcessorChange(undefined)
      handleProvinceChange(undefined)
      handleInfoTypeChange(undefined)
    }
    this.setState({ step: this.state.step - 1 });
  }

  reset = () => {
    this.setState({step: 0})
    this.props.resetAssessment();
    this.props.history.push('/');
  }

  onUserChange = (userType) => {
    this.setState({
      userType: userType
    })
  }

  getLocationComponent = () => {
    const { step } = this.state;
    const { assessment } = this.props;
    const userType = assessment.userType;

    if (userType && userType !== USER_TYPE.PROCESSOR)
      return OtherUser;

    return STEPS[step];
  }

  getSteps = () => {
    const { step, userType } = this.state;
    console.log(userType);
    if (userType && userType !== USER_TYPE.PROCESSOR){
      return (
        <div className='MainForm__steps'>
          {STEPS.slice(0,2).map((_, i) =>
            <div
              key={i}
              className={cx('MainForm__step',
              { 'MainForm__step--active-1' : i <= step && i === 0 },
              { 'MainForm__step--active-2' : i <= step && i === 1}
              )}
            >
              {i + 1}
            </div>
          )}
        </div>
      )
    }
    else{
      return(
        <div className='MainForm__steps'>
          {STEPS.map((_, i) =>
            <div
              key={i}
              className={cx('MainForm__step',
              { 'MainForm__step--active-1' : i <= step && i === 0},
              { 'MainForm__step--active-2' : i <= step && i === 1},
              { 'MainForm__step--active-3' : i <= step && i === 2},
              { 'MainForm__step--active-4' : i <= step && i === 3},
              { 'MainForm__step--active-5' : i <= step && i === 4},
              { 'MainForm__step--active-6' : i <= step && i === 5},
              { 'MainForm__step--active-7' : i <= step && i === 6},
              )}
            >
              {i + 1}
            </div>
          )}
        </div>
      )
    }
  }

  render(){
    const {
      onAssessmentChange,
      handleLocChange,
      handlePersonalInfoChange,
      handleInfoTypeChange,
      handlePublicInfoChange,
      handleUserChange,
      handleProcessorChange,
      handleProvinceChange,
      handleHealthInfoChange,
      handleCrossesBordersChange,
      assessment,
      locations
    } = this.props;

    //const {userType} = this.state;

    const Component = this.getLocationComponent() ;
    const Steps = this.getSteps();

    return(
      <Container className='MainForm'>
        <Jumbotron className='MainForm__content'>
          {Steps}
          <div className='MainForm__component'>
            <Component
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              onUserChange={this.onUserChange}
              handleLocChange={handleLocChange}
              handlePersonalInfoChange={handlePersonalInfoChange}
              handleInfoTypeChange={handleInfoTypeChange}
              handleUserChange={handleUserChange}
              handlePublicInfoChange={handlePublicInfoChange}
              handleProcessorChange={handleProcessorChange}
              handleProvinceChange={handleProvinceChange}
              handleAssessmentChange={onAssessmentChange}
              handleHealthInfoChange={handleHealthInfoChange}
              handleCrossesBordersChange={handleCrossesBordersChange}
              locations= {locations}
              assessment={assessment}
            />
          </div>
          <div className='MainForm__buttons'>
            <Button variant='light' onClick={this.prevStep}>
              <Icon name='arrow-left' /> Previous
            </Button>
            <div className='fill' />
            <Button variant='light' onClick={this.reset}>
              <Icon name='refresh' /> Reset
            </Button>
          </div>
        </Jumbotron>
      </Container>
    )
  }
}

export default withRouter(MainForm);
