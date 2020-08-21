import React, { Component } from 'react';
import { ButtonGroup, Button, Alert } from 'react-bootstrap';

import { LOCATION } from '../constants';

class OrganizationForm extends Component{

    saveAndContinue = (location) => {
      this.props.nextStep();
      this.props.handleLocChange({ type: 'organization', location });
    }

    render(){
      const { assessment } = this.props;
      return(
        <div>
          <h1> Where is the project/organization established?</h1>
          <Alert variant='info' style={{paddingBottom: '1%'}}> Type of user: {assessment.userType}</Alert>
          <ButtonGroup style={{width: '100%'}} size="lg" vertical>
            <Button variant='light'onClick={() => this.saveAndContinue(LOCATION.CAN)}>Canada</Button>
            <Button variant='light' onClick={() => this.saveAndContinue(LOCATION.EU)}>Europe</Button>
            <Button variant='light' onClick={() => this.saveAndContinue(LOCATION.USA)}>United States</Button>
          </ButtonGroup>
        </div>
      )
    }
}

export default OrganizationForm;
