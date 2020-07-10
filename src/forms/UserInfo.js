import React, { Component } from 'react';
import { Form, ButtonGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class UserInfo extends Component{

  constructor(props) {
   super(props);

   // This binding is necessary to make `this` work in the callback
   this.saveAndContinue = this.saveAndContinue.bind(this);
  }

    saveAndContinue = (e, value) => {
        e.preventDefault();
        this.props.nextStep();
        this.props.handleUserChange(value);
    }

    back  = (e) => {
      e.preventDefault();
      this.props.prevStep();
    }

    createUser = (user) => {
      return ({
        type : user,
        known: true,
      });
    }

    render(){
        const { values } = this.props;
        return(
          <div>
            <h1 style={{paddingBottom: '2%'}}> What type of user are you? </h1>
            <ButtonGroup style={{width:'100%'}} size="lg" vertical>
              <Button variant="light" onClick={(e) => this.saveAndContinue(e, this.createUser('processor'))}>Are you a processor of data?</Button>
              <Button variant="light" onClick={(e) => this.saveAndContinue(e, this.createUser('recipient'))}>Are you a data recipient?</Button>
              <Button variant="light" onClick={(e) => this.saveAndContinue(e, this.createUser('donor'))}>Are you a data donor?</Button>
            </ButtonGroup>
            <div style={{paddingTop: '3%'}}>
              <Link to="/">
                <Button variant="danger"> Restart  </Button>
              </Link>
            </div>
          </div>
        )
    }
}

export default UserInfo;
