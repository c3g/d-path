import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonGroup, Container, Jumbotron, OverlayTrigger } from 'react-bootstrap';
import Select from 'react-select';
import Icon from 'react-fontawesome';
import {getSteps} from '../utils/Steps.js';
import countryList from 'react-select-country-list';
import { europe } from '../utils/Popovers';

import { LOCATION } from '../constants';

class DataUsersForm extends Component{

  constructor(props) {
    super(props)

    this.options = countryList().getData()

    this.state = {
      options: this.options,
      value: null,
    }
  }

   changeHandler = value => {
     this.setState({ value });
     this.saveLocation(value.label);
     this.props.history.push('/assessment/donors');
   }


    saveLocation = (location) => {
      this.props.nextStep();
      this.props.handleLocChange({ type: 'dataUsers', location });
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
                <div>
                  <h1 style={{paddingBottom: '2%'}}> Where are the data recipients/users? </h1>
                  <ButtonGroup style={{width:'60%'}} size="lg" vertical>
                    <Link className='formButton' to='/assessment/donors' onClick={() => this.saveLocation(LOCATION.CAN)}> Canada </Link>
                    <OverlayTrigger trigger={['hover', 'focus']} placement='right' overlay={europe}>
                        <Link className='formButton' to='/assessment/donors' onClick={() => this.saveLocation(LOCATION.EU)}> Europe </Link>
                    </OverlayTrigger>
                    <Link className='formButton' to='/assessment/donors' onClick={() => this.saveLocation(LOCATION.USA)}> United States </Link>
                  </ButtonGroup>
                </div>
                <h4
                style={{
                  textAlign: 'center',
                  paddingTop: '1em',
                  paddingBottom: '0.5em',
                  fontSize: '1.5em',
                  fontWeight: 'normal',
                  textTransform: 'uppercase',
                  letterSpacing: 1,
                }}>
                  OR
                </h4>
                <div  style={{width: '50%', marginLeft: '25%'}}>
                  <Select
                     options={this.state.options}
                     value={this.state.value}
                     onChange={this.changeHandler}
                  />
                </div>
              </div>
              <div className='MainForm__buttons'>
                <Link className='resetButton' to='/assessment/processor' onClick={this.props.prevStep}>
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

export default DataUsersForm;
