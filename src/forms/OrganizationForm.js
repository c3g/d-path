import React, { Component } from 'react';
import { Form, ButtonGroup, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { LOCATION } from '../constants';

class OrganizationForm extends Component{

  constructor(props) {
   super(props);

  }

    saveAndContinue = (location) => {
      this.props.nextStep();
      this.props.handleLocChange({
        type: 'organization',
        location,
      });
    }

    back  = (e) => {
      e.preventDefault();
      this.props.prevStep();
    }

    render(){
        const { values } = this.props;
        return(
          <div>
            <h1> Where is the project/organization established?</h1>
            <Alert variant='info' style={{paddingBottom: '1%'}}> Type of user: {this.props.userType}</Alert>
            <ButtonGroup style={{width: '100%'}} size="lg" vertical>
              <Button variant='light'onClick={() => this.saveAndContinue(LOCATION.CAN)}>Canada</Button>
              <Button variant='light' onClick={() => this.saveAndContinue(LOCATION.EU)}>Europe</Button>
              <Button variant='light' onClick={() => this.saveAndContinue(LOCATION.USA)}>United States</Button>
            </ButtonGroup>
            <div style={{paddingTop: '3%'}}>
              <Button variant={'warning'} onClick={(e) => this.back(e)}> Back </Button>
              <Link to='/'>
                <span className='restartButton'> Restart </span>
              </Link>
            </div>
          </div>
        )
    }
}

export default OrganizationForm;
