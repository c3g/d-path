import React, { Component } from 'react';
import { ButtonGroup, Button, Alert } from 'react-bootstrap';
import Select from 'react-select';
import countryList from 'react-select-country-list';

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
      const { assessment } = this.props;
      return(
        <div>
          <div>
            <h1> Where are the data recipients/users? </h1>
            <Alert variant='info' style={{paddingBottom: '1%'}}> Type of user: {assessment.userType}</Alert>
            <ButtonGroup style={{width:'100%'}} size="lg" vertical>
              <Button variant='light' onClick={() => this.saveLocation(LOCATION.CAN)}>Canada</Button>
              <Button variant='light' onClick={() => this.saveLocation(LOCATION.EU)}>Europe</Button>
              <Button variant='light' onClick={() => this.saveLocation(LOCATION.USA)}>United States</Button>
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
      )
    }
}

export default DataUsersForm;
