import React, { Component } from 'react';
import { Form, ButtonGroup, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { LOCATION } from '../constants';

class DataUsersForm extends Component{

  constructor(props) {
   super(props);

   this.state = {
     location: '',
     isPerfonalInfo: false
   }
  }

    saveLocation = (location) => {
      this.props.nextStep();
      this.props.handleLocChange({ type: 'dataUsers', location });
    }

    createType = (location) => {

      return ({
        type : 'dataUsers',
        location: location,
        print: 'Where are the data users?'
      });
    }

    render(){
        const { values } = this.props;
        return(
          <div>
            <h1> Where are the data recipients/users? </h1>
            <Alert variant='info' style={{paddingBottom: '1%'}}> Type of user: {this.props.userType}</Alert>
            <ButtonGroup style={{width:'100%'}} size="lg" vertical>
              <Button variant='light' onClick={() => this.saveLocation(LOCATION.CAN)}>Canada</Button>
              <Button variant='light' onClick={() => this.saveLocation(LOCATION.EU)}>Europe</Button>
              <Button variant='light' onClick={() => this.saveLocation(LOCATION.USA)}>United States</Button>
            </ButtonGroup>
          </div>
        )
    }
}

export default DataUsersForm;
