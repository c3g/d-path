import React, { Component } from 'react';
import { Container, Jumbotron, Button, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { PROVINCES, PROCESSOR } from '../constants';
import Icon from 'react-fontawesome';
import {getSteps, addBorderStep, removeLastStep} from '../utils/Steps.js';

class InfoProvince extends Component{

    saveProvince = (province) => {
      const { processor } = this.props.assessment;
      this.props.handleProvinceChange(province);

      if(processor !== PROCESSOR.PRIV_COMM){
          //just for these 2 we have to display all laws
          if((processor === PROCESSOR.MUSH || processor === PROCESSOR.PROV_GOV)){
            this.props.handleProcessorChange({
              body: processor.body ,
              laws: province.laws,
              provincial: true
            });
          }

          this.props.nextStep();
          this.props.history.push('/assessment/success');
      }
      else{
        //only Priv and Comm have similar regulation
        addBorderStep();
        this.props.nextStep();
        this.props.history.push('/assessment/info/border');
      }
    }

    prevStep = () => {
      removeLastStep();
      this.props.prevStep();
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
                <h4 style={{paddingBottom: '2%'}} >In which province does the processing take place?</h4>
                <ButtonGroup style={{width: '100%'}} size="lg" vertical>
                  <Button variant='light' onClick={() => this.saveProvince(PROVINCES.ALB)}>Alberta</Button>
                  <Button variant='light' onClick={() => this.saveProvince(PROVINCES.BC)}>British Columbia</Button>
                  <Button variant='light' onClick={() => this.saveProvince(PROVINCES.MAN)}>Manitoba</Button>
                  <Button variant='light' onClick={() => this.saveProvince(PROVINCES.NB)}>New Brunswick</Button>
                  <Button variant='light' onClick={() => this.saveProvince(PROVINCES.NL)}>Newfoundland and Labrador</Button>
                  <Button variant='light' onClick={() => this.saveProvince(PROVINCES.NT)}>Northwest Territories</Button>
                  <Button variant='light' onClick={() => this.saveProvince(PROVINCES.NS)}>Nova Scotia</Button>
                  <Button variant='light' onClick={() => this.saveProvince(PROVINCES.NUN)}>Nunavut</Button>
                  <Button variant='light' onClick={() => this.saveProvince(PROVINCES.ON)}>Ontario</Button>
                  <Button variant='light' onClick={() => this.saveProvince(PROVINCES.PE)}>Prince Edward Island</Button>
                  <Button variant='light' onClick={() => this.saveProvince(PROVINCES.QC)}>Quebec</Button>
                  <Button variant='light' onClick={() => this.saveProvince(PROVINCES.SAS)}>Saskatchewan</Button>
                  <Button variant='light' onClick={() => this.saveProvince(PROVINCES.YUK)}>Yukon</Button>
                </ButtonGroup>
              </div>
            </div>
            <div className='MainForm__buttons'>
              <Link className='resetButton' to='/assessment/info/public' onClick={this.prevStep}>
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

export default InfoProvince;
