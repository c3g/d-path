import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonGroup, Container, Jumbotron, Card, OverlayTrigger } from 'react-bootstrap';
import Icon from 'react-fontawesome';

import {getSteps} from '../utils/Steps.js';
import { LOCATION } from '../constants';
import { europe } from '../utils/Popovers';

class DataDonorsForm extends Component{

    saveLocation = (location) => {
        this.props.handleLocChange({ type: 'dataDonors', location });
        this.props.nextStep();
    }

    render(){
      const {step, assessment} = this.props;
      const Steps = getSteps(step, assessment.userType);
      return(
        <>
          <Container className='MainForm'>
            <Jumbotron className='MainForm__content'>
              {Steps}
              <div>
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
                  Location Information
                </h6>
                <hr />
                <h1 style={{paddingBottom: '2%'}}> Where are the data subjects/data donors? </h1>
                <ButtonGroup style={{width:'60%'}} size="lg" vertical>
                  <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={europe}>
                      <Link className='formButton' to='/assessment/info/description' onClick={() => this.saveLocation(LOCATION.EU)}> Europe </Link>
                  </OverlayTrigger>
                  <Link className='formButton' to='/assessment/info/description' onClick={() => this.saveLocation(LOCATION.NON_EU)}> Non-Europe </Link>
                </ButtonGroup>
                <Card body
                style={{
                  textAlign: 'center',
                  marginBottom: '1rem'
                }}>
                Please note that the GDPR applies in certain cases where the donors belong to the European Union and European Economic Area
                </Card>
              </div>
              <div className='MainForm__buttons'>
                <Link className='resetButton' to='/assessment/recipients' onClick={this.props.prevStep}>
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

export default DataDonorsForm;
