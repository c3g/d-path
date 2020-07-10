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
      console.log(locations);
    }

    getLocationComponent = () => {
      const { step } = this.state;
      var Form, currentForm;
      switch(step) {
      case 0:
          Form = UserInfo;
          currentForm = 'userType';
          break;
      case 1:
          Form = OrganizationForm;
          currentForm = 'organization';
          break;
      case 2:
          Form = DataProcessingForm;
          currentForm = 'dataProcessed';
          break;
      case 3:
          Form = DataUsersForm;
          currentForm = 'dataUsers';
          break;
      case 4:
          Form = DataDonorsForm;
          currentForm = 'dataDonors';
          break;
      case 5:
          Form = PersonalInfo;
          currentForm = 'personalInfo';
          break;
      case 6:
          Form = Success;
          currentForm = 'sucess';
          break;
      }
      return Form;
    }

    render(){
        const {step, isUserKnown, userType, data, locations, currentForm} = this.state;
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
                createArray={this.createLocationArray}
                locations= {locations}
                currentForm={currentForm}
                userType={userType}
              />
            </Jumbotron>
            <InfoTable values={data}/>
          </div>
        </Container>)
    }
}

export default MainForm;
