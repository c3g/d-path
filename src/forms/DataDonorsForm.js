import React, { Component } from 'react';
import { Form, ButtonGroup, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class DataDonorsForm extends Component{

  constructor(props) {
   super(props);

   this.state = {
     location: '',
     isPerfonalInfo: false
   }
  }

    saveLocation = (e, value) => {
        e.preventDefault();
        this.props.handleLocChange(value);
        this.props.createArray();
        this.props.nextStep();
    }

    back  = (e) => {
      e.preventDefault();
      this.props.prevStep();
    }

    createType = (location) => {
      return ({
        type : 'dataDonors',
        location: location,
        print: 'Where are the data users?'
      });
    }

    render(){
        const { values } = this.props;
        return(
          <div>
            <h1> Where are the data subjects/data donors? </h1>
            <Alert variant='info' style={{paddingBottom: '1%'}}> Type of user: {this.props.userType}</Alert>
            <ButtonGroup style={{width:'100%'}} size="lg" vertical>
              <Button variant="light" onClick={(e) => this.saveLocation(e, this.createType('Europe'))}>Europe</Button>
              <Button variant="light" onClick={(e) => this.saveLocation(e, this.createType('Non-Europe'))}>Non-Europe</Button>
            </ButtonGroup>
            <div style={{paddingTop: '3%'}}>
              <Button variant={'warning'} onClick={(e) => this.back(e)}> Back </Button>
              <Link to="/">
                <Button variant="danger"> Restart  </Button>
              </Link>
            </div>
          </div>
        )
    }
}

export default DataDonorsForm;
