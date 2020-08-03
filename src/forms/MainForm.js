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
            currentForm: 'organization',
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
        const { step } = this.state;
        this.setState({
            step : step + 1
        });
    }

    prevStep = () => {
      const { step } = this.state;
        this.setState({
            step : step - 1
        });
    }

    handleLocChange = (input) => {
      var { data, locations, step } = this.state;
      for (var i in data) {
         if (data[i].type == input.type) {
           data[i] = {
                type:input.type,
                location: input.location,
                print:input.print,
            }
            this.setState({
              data : data,
              isLocationKnown: true,
              currentForm: input.type
            });
         }
      }
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
      var locations = [];
      data.forEach(item => {
        const loc = item.location;
        if((!locations.includes(loc)) && loc != 'Non-Europe') locations.push(loc);
      });
      this.setState({ locations: locations });
    }

    getLocationComponent = () => {
      return STEPS[this.state.step];
    }

    render(){
        const {step, isUserKnown, userType, data, locations, isPersonalInfo} = this.state;
        const {handleChange} = this.props;
        const Component = (isUserKnown && userType != 'processor') ? OtherUser :this.getLocationComponent() ;
        return(
        <Container>
          <div>
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
          </div>
        </Container>)
    }
}

export default MainForm;
