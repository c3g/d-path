import React, { Component } from 'react';
import { Jumbotron, Container, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Icon from 'react-fontawesome';

import {getSteps} from '../utils/Steps.js';

class Success extends Component{

    render(){
      const {step, assessment} = this.props;
      const Steps = getSteps(step, assessment.userType);
      return(
        <>
          <Container className='MainForm'>
            <Jumbotron className='MainForm__content'>
              {Steps}
              <div className='MainForm__component'>
                <h1 className='ui centered'> {assessment.userType === 'recipient' ? 'Data Recipient' : 'Data Donor'}</h1>
                <h5 className='ui centered' style={{fontSize: '17px', marginTop:'2%'}}>
                  <Alert variant='info'  style={{paddingBottom: '1%', width: '60%', marginLeft:'20%'}}> Refer to
                  {assessment.userType === 'recipient' ? ' the terms of service ' : ' your consent agreement '}
                  with your data producer for your obligations. </Alert>
                </h5>
              </div>
              <div className='MainForm__buttons'>
                <Link className='resetButton' to='/assessment/user' onClick={this.props.prevStep}>
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

export default Success;
