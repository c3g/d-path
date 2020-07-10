import React, { Component } from 'react';
import { Form, ButtonGroup, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class DataUsersForm extends Component{

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
        this.props.handleLocChange(value);
    }

    back  = (e) => {
      e.preventDefault();
      this.props.prevStep();
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
              <Button variant="light" onClick={(e) => this.saveLocation(e, this.createType('Canada') )}>Canada</Button>
              <Button variant="light" onClick={(e) => this.saveLocation(e, this.createType('Europe'))}>Europe</Button>
              <Button variant="light" onClick={(e) => this.saveLocation(e, this.createType('United States'))}>United States</Button>
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

export default DataUsersForm;
