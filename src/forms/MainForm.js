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
import { USER_TYPE, LOCATION } from '../constants';

const STEPS = [
  UserInfo,
  OrganizationForm,
  DataProcessingForm,
  DataUsersForm,
  DataDonorsForm,
  PersonalInfo,
  Success,
]

function getLocations(answers) {
  return Object.values(answers)
    .filter(Boolean)
    .filter(l => l !== LOCATION.NON_EU);
}

const INITIAL_STATE = {
  step: 0,
  userType: undefined,
  isPersonalInfo: false,
  answers: {
    organization: undefined,
    dataProcessed: undefined,
    dataUsers: undefined,
    dataDonors: undefined,
  }
}

class MainForm extends Component {

  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
  }

  nextStep = () => {
    this.setState({ step: this.state.step + 1 });
  }

  prevStep = () => {
    if (this.state.step === 1)
      this.handleUserChange(undefined);
    if (this.state.step === 0)
      this.props.history.push('/')
    else
      this.setState({ step: this.state.step - 1 });
  }

  reset = () => {
    this.setState(INITIAL_STATE)
  }

  handleLocChange = (input) => {
    const { answers } = this.state;
    this.setState({
      answers: { ...answers, [input.type]: input.location },
    });
  }

  handleInfoChange  = (input) => {
    this.setState({
      isPersonalInfo: input,
    });
  }

  handleUserChange  = (userType) => {
    this.setState({ userType });
  }

  getLocationComponent = () => {
    const { step, userType } = this.state;

    if (userType && userType !== USER_TYPE.PROCESSOR)
      return OtherUser;

    return STEPS[step];
  }

  render(){
    const {
      step,
      userType,
      answers,
      isPersonalInfo
    } = this.state;
    const { onLocationChange } = this.props;

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
              handleLocChange={this.handleLocChange}
              handleInfoChange={this.handleInfoChange}
              handleUserChange={this.handleUserChange}
              handleChange={onLocationChange}
              locations= {getLocations(answers)}
              userType={userType}
              isPersonalInfo={isPersonalInfo}
              answers={answers}
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
