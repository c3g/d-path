import React, { Component } from 'react';
import { Form, ButtonGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class DataUsersForm extends Component{

  constructor(props) {
   super(props);

   this.state = {
     location: '',
     isPerfonalInfo: false
   }

   // This binding is necessary to make `this` work in the callback
   this.saveAndContinue = this.saveAndContinue.bind(this);
  }

    saveAndContinue = (e, value) => {
        e.preventDefault();
        this.props.nextStep();
        this.props.handleChange(value);
    }

    back  = (e) => {
      e.preventDefault();
      this.props.prevStep();
    }

    createType = (location) => {

      return ({
        type : 'dataUsers',
        location: location,
        isPerfonalInfo: this.state.isPersonalInfo

      })
    }

    render(){
        const { values } = this.props;
        return(
          <div>
            <h1 style={{paddingBottom: '2%'}}> Where are the data recipients/users? </h1>
            <ButtonGroup style={{width:'100%'}} size="lg" vertical>
              <Button onClick={(e) => this.saveAndContinue(e, this.createType('Canada') )}>Canada</Button>
              <Button onClick={(e) => this.saveAndContinue(e, this.createType('Europe'))}>Europe</Button>
              <Button onClick={(e) => this.saveAndContinue(e, this.createType('United States'))}>United States</Button>
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
