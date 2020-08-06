import React, { Component } from 'react';
import { Form, ButtonGroup, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { LOCATION } from '../constants';

class DataProcessingForm extends Component{

  constructor(props) {
   super(props);

   this.state = {
     location: '',
     isPerfonalInfo: false
   }
  }

    saveLocation = (e, value) => {
        e.preventDefault();
        this.props.nextStep();
        this.props.handleLocChange({
          type: 'dataProcessed',
          location: value,
        });
    }

    render(){
        const { values } = this.props;
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
