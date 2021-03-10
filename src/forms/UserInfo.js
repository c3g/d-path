import React, { Component } from 'react';
import { Container, Jumbotron, ButtonGroup, OverlayTrigger } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Icon from 'react-fontawesome';

import {getSteps} from '../utils/Steps.js';
import { processor, recipient, donor } from '../utils/Popovers';
import { USER_TYPE } from '../constants';

class UserInfo extends Component{

    saveAndContinue = (userType) => {
        this.props.handleUserChange(userType);
        this.props.nextStep();
    }

    render(){
        const {step, userType} = this.props;
        const Steps = getSteps(step, userType);
        return(
          <>
          <Container className='MainForm'>
            <Jumbotron className='MainForm__content'>
              {Steps}
              <div className='MainForm__component'>
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
                  User Information
                </h6>
                <hr />
                <h1 style={{paddingBottom: '2%'}}> What type of user are you? </h1>
                <ButtonGroup className='userButtons' style={{width: '60%'}} size='lg' vertical>
                  <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={processor}>
                    <Link className='formButton' to='/assessment/organization' onClick={() => this.saveAndContinue(USER_TYPE.PROCESSOR)}>
                      Data processor
                    </Link>
                   </OverlayTrigger>
                   <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={recipient}>
                    <Link className='formButton' to='/assessment/other-user' onClick={() => this.saveAndContinue(USER_TYPE.RECIPIENT)}>
                      Data recipient
                    </Link>
                   </OverlayTrigger>
                  <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={donor}>
                    <Link className='formButton' to='/assessment/other-user' onClick={() => this.saveAndContinue(USER_TYPE.DONOR)}>
                      Data donor
                    </Link>
                  </OverlayTrigger>
                </ButtonGroup>
              </div>
              <div className='MainForm__buttons'>
                <Link className='resetButton' to='/'>
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

export default UserInfo;
