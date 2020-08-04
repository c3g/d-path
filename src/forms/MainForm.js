import React, { Component } from 'react';
import {Container, Jumbotron} from 'react-bootstrap';

import OrganizationForm from './OrganizationForm';
import DataProcessingForm from './DataProcessingForm';
import DataUsersForm from './DataUsersForm';
import DataDonorsForm from './DataDonorsForm';
import Success from './Success';
import InfoTable from './InfoTable';
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

class MainForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
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
  }

  nextStep = () => {
    this.setState({ step: this.state.step + 1 });
  }

  prevStep = () => {
    this.setState({ step: this.state.step - 1 });
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
      userType,
      answers,
      isPersonalInfo
    } = this.state;
    const { handleChange } = this.props;

    const Component = this.getLocationComponent() ;

    return(
      <Container>
        <Jumbotron>
          <Component
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleLocChange={this.handleLocChange}
            handleInfoChange={this.handleInfoChange}
            handleUserChange={this.handleUserChange}
            handleChange={handleChange}
            locations= {getLocations(answers)}
            userType={userType}
            isPersonalInfo={isPersonalInfo}
            answers={answers}
          />
        </Jumbotron>
        {userType !== undefined &&
          <InfoTable answers={answers} />
        }
      </Container>
    )
  }
}

export default MainForm;
