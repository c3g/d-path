import React, { Component } from 'react';
import { Container, Jumbotron, Button, ButtonGroup, OverlayTrigger } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Icon from 'react-fontawesome';
import { commercialActivity, mush, fwub, healthcare } from '../utils/Popovers';
import {getSteps, addProvincialStep, removeLastStep} from '../utils/Steps.js';
import { PROCESSOR } from '../constants';

class InfoProcessor extends Component{

    nextStep = (processor) => {
      this.props.handleProcessorChange(processor);
      if(processor.provincial) {
        addProvincialStep();
        this.props.nextStep();
        this.props.history.push('/assessment/info/province');
      }
      else{
        this.props.nextStep();
        this.props.history.push('/assessment/success');
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
                  <h4 style={{paddingBottom: '2%'}}> Who processes the personal information?</h4>
                  <ButtonGroup style={{width: '60%'}} size="lg" vertical>
                    <Button variant='light'onClick={() => this.nextStep(PROCESSOR.FED)}>Federal Government Institution</Button>
                    <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={commercialActivity}>
                      <Button variant='light' onClick={() => this.nextStep(PROCESSOR.PRIV_COMM)}>Private Individuals and Organizations in the course of Commercial activities</Button>
                    </OverlayTrigger>
                    <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={fwub}>
                      <Button variant='light' onClick={() => this.nextStep(PROCESSOR.FWUB)}>Federally regulated businesses</Button>
                    </OverlayTrigger>
                    <Button variant='light' onClick={() => this.nextStep(PROCESSOR.PROV_GOV)}>Provincial Government Institution</Button>
                    <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={mush}>
                      <Button variant='light' onClick={() => this.nextStep(PROCESSOR.MUSH)}>MUSHs</Button>
                    </OverlayTrigger>
                    <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={healthcare}>
                        <Button variant='light' onClick={() => this.nextStep(PROCESSOR.HEALTH)}>Healthcare Professionals</Button>
                    </OverlayTrigger>
                    <Button variant='light' onClick={() => this.nextStep(PROCESSOR.NON_COMM)}>Individuals and Organizations in the course of Non-Commercial activities</Button>
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

export default InfoProcessor;
