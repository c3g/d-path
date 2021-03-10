import React, { Component } from 'react';
import { Container, Jumbotron, Button, ButtonGroup, OverlayTrigger} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Icon from 'react-fontawesome';
import {getSteps, removeLastStep} from '../utils/Steps.js';
import { healthInfo } from '../utils/Popovers';

class InfoHealth extends Component{

  prevStep = () => {
    removeLastStep();
    this.props.prevStep();
  }

  saveIsHealthInformation = (isHealthInfo) => {
    const { province } = this.props.assessment;

    this.props.handleHealthInfoChange(isHealthInfo);

    this.setProcessorLaws(isHealthInfo, province);
    this.props.nextStep();
    this.props.history.push('/assessment/success');
  }

  setProcessorLaws = (isHealthInfo, province) => {
      if(isHealthInfo){
        this.props.handleProcessorChange({
          body: 'Private Organization & Commercial',
          laws: province.healthLaw,
          provincial: true
        })
      }
      else{
        this.props.handleProcessorChange({
          body: 'Private Organization & Commercial',
          laws: ['PIPEDA'], //**
          provincial: true
        })
      }
  }

  render(){
    const {step, assessment} = this.props;
    const Steps = getSteps(step, assessment.userType);
    return(
      <Container className='MainForm'>
        <Jumbotron className='MainForm__content'>
          {Steps}
          <div style={{marginBottom: '1rem'}}>
            <h6
              style={{
                marginBottom: '1rem',
                marginTop: '1rem',
                fontSize: '1em',
                fontWeight: 'normal',
                textTransform: 'uppercase',
                letterSpacing: 1,
                opacity: 0.4,
              }}
            >
              Personal Information
            </h6>
            <hr />
            <div>
              <h4 style={{paddingBottom: '2%'}}> Is the personal information processed {' '}
                <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={healthInfo}>
                  <abbr> Personal Health Information </abbr>
                </OverlayTrigger> ?
              </h4>
              <ButtonGroup style={{width: '60%'}} size="lg" vertical>
                <Button variant='light' onClick={() => this.saveIsHealthInformation(true)}> Yes </Button>
                <Button variant='light' onClick={() => this.saveIsHealthInformation(false)}> No </Button>
              </ButtonGroup>
            </div>
          </div>
          <div className='MainForm__buttons'>
            <Link className='resetButton' to='/assessment/info/border' onClick={this.prevStep}>
              <Icon name='arrow-left' /> Previous
            </Link>
            <div className='fill' />
            <Link className='resetButton' to='/' onClick={this.props.resetAssessment}>
              <Icon name='refresh' /> Reset
            </Link>
          </div>
        </Jumbotron>
      </Container>
    )
  }
}

export default InfoHealth;
