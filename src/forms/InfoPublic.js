import React, { Component } from 'react';
import { Container, Jumbotron, Button, OverlayTrigger, ButtonGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Icon from 'react-fontawesome';

import { getSteps, addProcessorStep, removeLastStep} from '../utils/Steps.js';
import { publicInfo } from '../utils/Popovers';

class InfoPublic extends Component{

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

    nextStep = (isPersonalInfo, isPublicInfo) => {
      this.props.nextStep();
      this.props.handlePublicInfoChange(isPublicInfo);
      this.props.handlePersonalInfoChange(isPersonalInfo);
      if(this.props.locations.includes('Canada')){
        addProcessorStep();
        this.props.history.push('/assessment/info/processor')
      }
      else{
        this.props.history.push('/assessment/success');
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
            <h4 style={{paddingBottom: '1%'}}>
              Is the information{' '}
              <OverlayTrigger trigger={['hover', 'focus']} placement='top' overlay={publicInfo}>
                <abbr>public</abbr>
              </OverlayTrigger> ?
            </h4>
            <ButtonGroup style={{width:'100%'}} size='lg' vertical>
              <Button variant='light' onClick={() => this.saveAndSuccess(false, true)}>Yes</Button>
              <Button variant='light' onClick={() => this.nextStep(true, false)}>No</Button>
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

export default InfoPublic;
