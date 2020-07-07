import React, { Component } from 'react';
import {Container, Jumbotron} from 'react-bootstrap';

import OrganizationForm from './OrganizationForm';
import DataProcessingForm from './DataProcessingForm';
import DataUsersForm from './DataUsersForm';
import DataDonorsForm from './DataDonorsForm';
import Success from './Success';
import InfoTable from './InfoTable'

class MainForm extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
      this.setState({
          step: 1,
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
      })
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = (input) => {
      var data = this.state.data;
      console.log(data);
      for (var i in data) {
         if (data[i].type == input.type) {
           data[i] = {
                type:input.type,
                location: input.location,
                isPerfonalInfo:input.isPerfonalInfo,
            }
            this.setState({ data : data});
         }
      }
    }

    render(){
        const {step, data} = this.state;
        var FormComponent = null;
        switch(step) {
        case 1:
            FormComponent = OrganizationForm;
            break;
        case 2:
            FormComponent = DataProcessingForm;
            break;
        case 3:
            FormComponent = DataUsersForm;
            break;
        case 4:
            FormComponent = DataDonorsForm;
            break;
        case 5:
            FormComponent = Success;
            break;
        }
        return(
        <Container>
          <div>
            <Jumbotron>
              <FormComponent
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange = {this.handleChange}
              />
            </Jumbotron>
            <InfoTable values={data}/>
          </div>
        </Container>)
    }
}

export default MainForm;
