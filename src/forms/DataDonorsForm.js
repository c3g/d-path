import React, { Component } from 'react';
import { Form, ButtonGroup, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { LOCATION } from '../constants';

class DataDonorsForm extends Component{

    saveLocation = (location) => {
        this.props.handleLocChange({ type: 'dataDonors', location });
        this.props.nextStep();
    }

    back  = (e) => {
      e.preventDefault();
      this.props.prevStep();
    }

    render(){
        const { values } = this.props;
        return(
          <div>
            <h1> Where are the data subjects/data donors? </h1>
            <Alert variant='info' style={{paddingBottom: '1%'}}> Type of user: {this.props.userType}</Alert>
            <ButtonGroup style={{width:'100%'}} size="lg" vertical>
              <Button variant='light' onClick={() => this.saveLocation(LOCATION.EU)}>Europe</Button>
              <Button variant='light' onClick={() => this.saveLocation(LOCATION.NON_EU)}>Non-Europe</Button>
            </ButtonGroup>
            <div style={{paddingTop: '3%'}}>
              <Button variant={'warning'} onClick={(e) => this.back(e)}> Back </Button>
              <Link to="/">
                <Button style={{ marginLeft: '1%'}} variant='danger'> Restart  </Button>
              </Link>
            </div>
          </div>
        )
    }
}

export default DataDonorsForm;
