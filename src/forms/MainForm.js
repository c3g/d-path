import React, { Component } from 'react';
import {Container, Jumbotron, Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import Icon from 'react-fontawesome';

import OtherUser from './OtherUser';
import {getSteps, STEPS} from '../utils/Steps.js';
import { USER_TYPE } from '../constants';

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
    const { step, userType } = this.state;

    //const {userType} = this.state;

    const Component = this.getLocationComponent() ;
    const Steps = getSteps(step, userType);

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
