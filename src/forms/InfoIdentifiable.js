import React, { Component } from 'react';
import { Container, Jumbotron, Button, OverlayTrigger, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Icon from 'react-fontawesome';
import {getSteps, addInfoPublicStep, removeLastStep} from '../utils/Steps.js';
import { identifiable } from '../utils/Popovers';

class InfoIdentifiable extends Component{

    prevStep = () => {
      removeLastStep();
      this.props.prevStep();
    }

    saveAndSuccess = (isPersonalInfo, isPublicInfo) => {
        this.props.nextStep();
        this.props.handlePublicInfoChange(isPublicInfo);
        this.props.handlePersonalInfoChange(isPersonalInfo);
        this.props.history.push('/assessment/success');
    }

    nextStep = (isIdentifiable) => {
      addInfoPublicStep();
      this.props.nextStep();
      this.props.handleIdentifiableInfoChange(isIdentifiable);
      this.props.history.push('/assessment/info/public');
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
                <h4 style={{paddingBottom: '1%'}}>
                  Is the information{' '}
                  <OverlayTrigger trigger={['hover', 'focus']} placement='top' overlay={identifiable}>
                    <abbr>identifiable</abbr>
                  </OverlayTrigger>{' '}
                  ?
                </h4>
                <ButtonGroup style={{width:'100%'}} size='lg' vertical>
                  <Button variant='light' onClick={() => this.nextStep(true)}>Yes</Button>
                  <Button variant='light' onClick={() => this.saveAndSuccess(false, false)}>No</Button>
                </ButtonGroup>
              </div>
            </div>
            <div className='MainForm__buttons'>
              <Link className='resetButton' to='/assessment/info/description' onClick={this.prevStep}>
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

export default InfoIdentifiable;
