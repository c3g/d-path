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
      isUserKnown: false,
      userType: '',
      isInfoKnown: false,
      isPersonalInfo: false,
      locations: [],
      data: [
        { type: 'organization',
          print: 'Where is the organization?',
          location: '',
          },
        { type: 'dataProcessed',
          print: 'Where is the data processed?',
          location: '',
        },
        { type: 'dataUsers',
          print: 'Where are the data users?',
          location: '',
        },
        {
          type: 'dataDonors',
          print: 'Where are the data donors?',
          location: '',
        },
      ]
    }
  }

  nextStep = () => {
    this.setState({ step: this.state.step + 1 });
  }

  prevStep = () => {
    this.setState({ step: this.state.step - 1 });
  }

  handleLocChange = (input) => {
    const { data } = this.state;

    const newData = data.map(d => d.type !== input.type ? d : input)

    this.setState({
      data: newData,
      isLocationKnown: true,
    });
  }

  handleInfoChange  = (input) => {
    this.setState({
      isPersonalInfo: input,
      isInfoKnown: true
    });
  }

  handleUserChange  = (input) => {
    this.setState({
      userType: input.type,
      isUserKnown: input.known
    });
  }

  createLocationArray = () => {
    const { data } = this.state;
    const locations = [];

    data.forEach(item => {
      const loc = item.location;
      if ((!locations.includes(loc)) && loc !== 'Non-Europe')
        locations.push(loc);
    });

    this.setState({ locations: locations });
  }

  getLocationComponent = () => {
    const { step, isUserKnown, userType } = this.state;

    if (isUserKnown && userType !== 'processor')
      return OtherUser;

    return STEPS[step];
  }

  render(){
    const {
      isUserKnown,
      userType,
      data,
      locations,
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
            createArray={this.createLocationArray}
            locations= {locations}
            userType={userType}
            isPersonalInfo={isPersonalInfo}
            data={data}
          />
        </Jumbotron>
        {(isUserKnown) ? <InfoTable values={data}/> : null }
      </Container>
    )
  }
}

export default MainForm;
