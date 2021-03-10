import React, { Component } from 'react';
import { Container, Jumbotron, ButtonGroup, Button, OverlayTrigger } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Icon from 'react-fontawesome';
import {getSteps, addInfoPublicStep, addIdentifiableStep} from '../utils/Steps.js';
import { directly, indirectly, anonymous, anonymized, coded } from '../utils/Popovers';

import { INFO_TYPE } from '../constants';

class InfoDescription extends Component{

    saveAndContinue = (isPersonalInfo, isPublicInfo) => {
        this.props.nextStep();
        this.props.handlePublicInfoChange(isPublicInfo);
        this.props.handlePersonalInfoChange(isPersonalInfo);
        this.props.history.push('/assessment/success');
    }

    saveInfoType = (infoType) => {
      if(infoType === INFO_TYPE.DIRECTLY || infoType === INFO_TYPE.INDIRECTLY) this.nextStepPublic(true);
      else if (infoType === INFO_TYPE.ANONYMOUS || infoType === INFO_TYPE.ANONYMIZED)  this.saveAndContinue(false, false);
      else this.nextStepIdentifiable();
      this.setState({
        informationType: infoType
      });
      this.props.handleInfoTypeChange(infoType);
    }

    nextStepPublic = (identifiable) => {
      addInfoPublicStep();
      this.props.nextStep();
      this.props.history.push('/assessment/info/public');
      this.props.handleIdentifiableInfoChange(identifiable);
    }

    nextStepIdentifiable = () => {
      addIdentifiableStep();
      this.props.nextStep();
      this.props.history.push('/assessment/info/identifiable');
    }

    render(){
      const {step, assessment} = this.props;
      const Steps = getSteps(step, assessment.userType);
      return(
        <>
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
                <h1 style={{paddingBottom: '2%'}}> How would you describe the information? </h1>
                <ButtonGroup className='userButtons' style={{width: '60%'}} size='lg' vertical>
                  <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={directly}>
                    <Button variant='light' className='text-left' onClick={() => this.saveInfoType(INFO_TYPE.DIRECTLY)}>Directly Identifiable</Button>
                   </OverlayTrigger>
                   <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={indirectly}>
                    <Button variant='light' className='text-left' onClick={() => this.saveInfoType(INFO_TYPE.INDIRECTLY)}>Indirectly Identifiable</Button>
                   </OverlayTrigger>
                  <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={anonymized}>
                    <Button variant='light' className='text-left' onClick={() => this.saveInfoType(INFO_TYPE.ANONYMIZED)}>Anonymized</Button>
                  </OverlayTrigger>
                  <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={anonymous}>
                    <Button variant='light' className='text-left' onClick={() => this.saveInfoType(INFO_TYPE.ANONYMOUS)}>Anonymous</Button>
                  </OverlayTrigger>
                  <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={coded}>
                    <Button variant='light' className='text-left' onClick={() => this.saveInfoType(INFO_TYPE.CODED)}>Coded</Button>
                  </OverlayTrigger>
                </ButtonGroup>
              </div>
              </div>
              <div className='MainForm__buttons'>
                <Link className='resetButton' to='/assessment/donors' onClick={this.props.prevStep}>
                  <Icon name='arrow-left' /> Previous
                </Link>
                <div className='fill' />
                <Link className='resetButton' to='/' onClick={this.props.resetAssessment}>
                  <Icon name='refresh' /> Reset
                </Link>
              </div>
            </Jumbotron>
          </Container>
        </>
      )
    }
}

export default InfoDescription;
