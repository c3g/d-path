import React, { Component } from 'react';
import { ButtonGroup, Button, Alert } from 'react-bootstrap';

import { LOCATION } from '../constants';

class DataProcessingForm extends Component{

    saveLocation = (e, value) => {
        e.preventDefault();
        this.props.nextStep();
        this.props.handleLocChange({
          type: 'dataProcessed',
          location: value,
        });
    }

    render(){
        return(
          <div>
            <h1> Where is the data stored/processed? </h1>
            <Alert variant='info' style={{paddingBottom: '1%'}}> Type of user: {this.props.userType}</Alert>
            <ButtonGroup style={{width:'100%'}} size="lg" vertical>
              <Button variant='light' onClick={(e) => this.saveLocation(e, LOCATION.CAN)}>Canada</Button>
              <Button variant='light' onClick={(e) => this.saveLocation(e, LOCATION.EU)}>Europe</Button>
              <Button variant='light' onClick={(e) => this.saveLocation(e, LOCATION.USA)}>United States</Button>
            </ButtonGroup>
          </div>
        )
    }
}

export default DataProcessingForm;
