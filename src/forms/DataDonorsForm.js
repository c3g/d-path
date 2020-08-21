import React, { Component } from 'react';
import { ButtonGroup, Button, Alert } from 'react-bootstrap';

import { LOCATION } from '../constants';

class DataDonorsForm extends Component{

    saveLocation = (location) => {
        this.props.handleLocChange({ type: 'dataDonors', location });
        this.props.nextStep();
    }

    render(){
      const { assessment } = this.props;
      return(
        <div>
          <h1> Where are the data subjects/data donors? </h1>
          <Alert variant='info' style={{paddingBottom: '1%'}}> Type of user: {assessment.userType}</Alert>
          <ButtonGroup style={{width:'100%'}} size="lg" vertical>
            <Button variant='light' onClick={() => this.saveLocation(LOCATION.EU)}>Europe</Button>
            <Button variant='light' onClick={() => this.saveLocation(LOCATION.NON_EU)}>Non-Europe</Button>
          </ButtonGroup>
        </div>
      )
    }
}

export default DataDonorsForm;
