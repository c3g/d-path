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
      step: 0
    };
  }

  nextStep = () => {
    this.setState({ step: this.state.step + 1 });
  }

  prevStep = () => {
    const { handleUserChange } = this.props;
    if (this.state.step === 1)
      handleUserChange(undefined);
    if (this.state.step === 0)
      this.props.history.push('/')
    else
      this.setState({ step: this.state.step - 1 });
  }

  reset = () => {
    this.setState({step: 0})
    this.props.resetAssessment();
  }

  getLocationComponent = () => {
    const { step } = this.state;
    const { assessment } = this.props;
    const userType = assessment.userType;

    if (userType && userType !== USER_TYPE.PROCESSOR)
      return OtherUser;

    return STEPS[step];
  }

  render(){
    const { step } = this.state;
    const {
      onAssessmentChange,
      handleLocChange,
      handlePersonalInfoChange,
      handleInfoTypeChange,
      handleUserChange,
      handleProcessorChange,
      handleProvinceChange,
      assessment,
      locations
    } = this.props;

    const Component = this.getLocationComponent() ;

    return(
      <Container className='MainForm'>
        <Jumbotron className='MainForm__content'>
          <div className='MainForm__steps'>
            {STEPS.map((_, i) =>
              <div
                key={i}
                className={cx('MainForm__step', { 'MainForm__step--active': i <= step })}
              >
                {i + 1}
              </div>
            )}
          </div>

          <div className='MainForm__component'>
            <Component
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleLocChange={handleLocChange}
              handlePersonalInfoChange={handlePersonalInfoChange}
              handleInfoTypeChange={handleInfoTypeChange}
              handleUserChange={handleUserChange}
              handleProcessorChange={handleProcessorChange}
              handleProvinceChange={handleProvinceChange}
              handleAssessmentChange={onAssessmentChange}
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
