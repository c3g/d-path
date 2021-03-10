import React, { Component } from 'react';
import { Container, ButtonGroup, Jumbotron, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Icon from 'react-fontawesome';
import {getSteps, addHealthStep, removeLastStep} from '../utils/Steps.js';
import { PROVINCES } from '../constants';

class InfoCrossesBorders extends Component{

  prevStep = () => {
    removeLastStep();
    this.props.prevStep();
  }

  saveIsCrossingBorders = (isCrossingBorders) => {
    const { province } = this.props.assessment;

    this.props.handleCrossesBordersChange(isCrossingBorders);

    if(isCrossingBorders){
      this.props.handleProcessorChange({
        body: 'Private Organization & Not Commercial',
        laws: ['PIPEDA'],
        provincial: true
      });
      //no need to continue
      this.props.nextStep();
      this.props.history.push('/assessment/success');
    }
    else{
      //change the law to the specific private law if province is quebec before going to the next step
      if(province === PROVINCES.QC){
        this.props.handleProcessorChange({
          body: 'Private Organization & Commercial',
          laws: province.privateLaw,
          provincial: true
        });
      }

      if(this.askHealthInfo(province)){
        addHealthStep();
        this.props.nextStep();
        this.props.history.push('/assessment/info/health');
      }else{
        this.props.nextStep();
        this.props.history.push('/assessment/success');
      }
    }
  }

  askHealthInfo = (province) => {
    if(province === PROVINCES.ON || province === PROVINCES.NB || province === PROVINCES.NS || province === PROVINCES.NL){
        return true;
    }
    else return false;
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
              <h4 style={{paddingBottom: '2%'}}> Is the processing of the information crossing provincial or national borders? </h4>
              <ButtonGroup style={{width: '100%'}} size="lg" vertical>
                <Button variant='light' onClick={() => this.saveIsCrossingBorders(true)}> Yes </Button>
                <Button variant='light' onClick={() => this.saveIsCrossingBorders(false)}> No </Button>
              </ButtonGroup>
            </div>
          </div>
          <div className='MainForm__buttons'>
            <Link className='resetButton' to='/assessment/info/province' onClick={this.prevStep}>
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

export default InfoCrossesBorders;
