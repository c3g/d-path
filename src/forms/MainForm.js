import React, { Component } from 'react';
import {Container, Jumbotron} from 'react-bootstrap';

import OrganizationForm from './OrganizationForm';
import DataProcessingForm from './DataProcessingForm';
import DataUsersForm from './DataUsersForm';
import DataDonorsForm from './DataDonorsForm';
import Success from './Success';
import InfoTable from './InfoTable';
import CanadaFlow from './CanadaFlow';
import EuropeFlow from './EuropeFlow';
import USFlow from './USFlow';


class MainForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            isLocationKnown: false,
            currentLocation: '',
            currentForm: 'organization',
            data: [
              { type: 'organization',
                location: '',
                isPerfonalInfo: null
               },
              { type: 'dataProcessed',
                location: '',
                isPerfonalInfo: null
              },
              { type: 'dataUsers',
                location: '',
                isPerfonalInfo: null
              },
              {
                type: 'dataDonors',
                location: '',
                isPerfonalInfo: null
              },
            ]
        }
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
      const { step, isLocationKnown } = this.state;
      if(isLocationKnown){
        this.setState({
          isLocationKnown: false
        });
      } else {
        this.setState({
            step : step - 1
        });
      }
    }

    handleLocChange = (input) => {
      var { data } = this.state;
      console.log(data);
      for (var i in data) {
         if (data[i].type == input.type) {
           data[i] = {
                type:input.type,
                location: input.location,
                isPerfonalInfo:input.isPerfonalInfo,
            }
            this.setState({
              data : data,
              isLocationKnown: true,
              currentLocation: input.location,
              currentForm: input.type
            });
         }
      }
    }

    handleInfoChange  = (input) => {
      var { data } = this.state;
      console.log(data);
      for (var i in data) {
         if (data[i].type == input.type) {
           data[i] = {
                type:input.type,
                location: input.location,
                isPerfonalInfo:input.isPerfonalInfo,
            }
            this.setState({
              data : data,
              isLocationKnown: false,
              currentLocation: input.location
            });
         }
      }
    }

    getLocationComponent = () => {
      const { step } = this.state;
      var Form, currentForm;
      switch(step) {
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
          Form = Success;
          currentForm = 'sucess';
          break;
      }
      return Form;
    }

    getInformationComponent = () => {
      const { currentLocation } = this.state;
      switch(currentLocation) {
      case 'Canada':
          return CanadaFlow;
          break;
      case 'Europe':
          return EuropeFlow;
          break;
      case 'United States':
          return USFlow;
          break;
      default:
          return CanadaFlow;
          break;
      }
    }

    render(){
        const {step, isLocationKnown, data, currentLocation, currentForm} = this.state;
        const Component = isLocationKnown ? this.getInformationComponent() : this.getLocationComponent();
        return(
        <Container>
          <div>
            <Jumbotron>
              <Component
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleLocChange={this.handleLocChange}
                handleInfoChange={this.handleInfoChange}
                location= {currentLocation}
                currentForm={currentForm}
              />
            </Jumbotron>
            <InfoTable values={data}/>
          </div>
        </Container>)
    }
}

export default MainForm;
